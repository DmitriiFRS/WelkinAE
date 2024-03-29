"use client";

import PushData from "./PushData";
import styles from "../homepage.module.scss";
import { FormEvent, useEffect, useState } from "react";
import Popup from "./Popup";

function Inputs({ jwtToken }: { jwtToken: string | undefined }) {
   let scrollWidth: null | number = null;
   if (typeof window !== "undefined") {
      scrollWidth = window.innerWidth - document.body.clientWidth;
   }
   const [isPopupOpen, setPopupOpen] = useState(false);
   const [nameIsDirty, setNameIsDirty] = useState(false);
   const [telIsDirty, setTelIsDirty] = useState(false);
   const [textIsDirty, setTextIsDirty] = useState(false);
   const [name, setName] = useState("");
   const [tel, setTel] = useState<string>("");
   const [question, setQuestion] = useState("");
   function throwData() {
      if (!name || !tel || !question) {
         if (!name) {
            setNameIsDirty(true);
         }
         if (!tel) {
            setTelIsDirty(true);
         }
         if (!question) {
            setTextIsDirty(true);
         }
      } else {
         setPopupOpen(true);
      }
   }

   useEffect(() => {
      if (isPopupOpen) {
         document.body.style.overflow = "hidden";
         document.body.style.paddingRight = `${scrollWidth}px`;
      } else {
         document.body.style.overflow = "auto";
         document.body.style.paddingRight = "0px";
      }
   }, [isPopupOpen, scrollWidth]);

   function changeTel(e: React.ChangeEvent<HTMLInputElement>) {
      if (e.target.value.length > 13) return;
      if (e.target.value.length < 1) setTel("");
      if (/^(?!\\s)[0-9+]+$/.test(e.target.value)) {
         setTel(e.target.value);
      }
   }
   function clearDirtyStatus() {
      setNameIsDirty(false);
      setTelIsDirty(false);
      setTextIsDirty(false);
   }
   async function handleSubmit(e: FormEvent) {
      e.preventDefault();
      if (!name || !tel || !question) return;
      const url = "https://welkin-team.ae/wpgraphql";
      const headers = { "Content-type": "application/json", Authorization: `Bearer ${jwtToken}` };
      setName("");
      setTel("");
      setQuestion("");
      // ----------------------------------------------------
      const res2 = await fetch("/pages/api", {
         method: "POST",
         headers: {
            "Content-type": "application/json",
         },
         body: JSON.stringify({
            name,
            tel,
            question,
         }),
      });
      // ----------------------------------------------------
      const res = await fetch(url, {
         headers,
         method: "POST",
         body: JSON.stringify({
            query: `
            mutation {
               createReq(input: {title: "Имя: ${name}, Телефон: ${tel}, Вопрос: ${question}"}) {
                 req {
                   request {
                     name
                     phone
                     question
                   }
                 }
               }
             }
            `,
         }),
      });
      const data = await res.json();
      return data;
   }
   return (
      <form onSubmit={handleSubmit} className={styles.contactUs__inputsBody}>
         <input
            onFocus={clearDirtyStatus}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={`${styles.contactUs__input} ${nameIsDirty ? styles.contactUs__input__dirty : ""}`}
            placeholder="Your name"
            type="text"
         />
         <input
            onFocus={clearDirtyStatus}
            value={tel}
            name="phone"
            onChange={(e) => changeTel(e)}
            className={`${styles.contactUs__input} ${telIsDirty ? styles.contactUs__input__dirty : ""}`}
            placeholder="Your phone number"
            type="text"
         />
         <textarea
            onFocus={clearDirtyStatus}
            value={question}
            name="textarea"
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Your question"
            className={`${styles.contactUs__inputArea} ${textIsDirty ? styles.contactUs__inputArea__dirty : ""}`}
         ></textarea>
         <div
            className={`${styles.contactUs__dirtyField} ${
               nameIsDirty || telIsDirty || textIsDirty ? styles.contactUs__dirtyField__active : ""
            }`}
         >
            Please fill in all fields
         </div>
         <PushData throwData={throwData} />
         <Popup isPopupOpen={isPopupOpen} setPopupOpen={setPopupOpen} />
      </form>
   );
}
export default Inputs;
