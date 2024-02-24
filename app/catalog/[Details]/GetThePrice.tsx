"use client";

import { useState } from "react";
import styles from "../catalog.module.scss";

function GetThePrice({ decodedPhoneNumber }: { decodedPhoneNumber: string }) {
   const [isBtnPressed, setBtnPressed] = useState<boolean>(false);
   const [flag, setFlag] = useState(false);
   function toggleText() {
      if (!isBtnPressed && !flag) {
         setFlag(true);
         setTimeout(() => {
            setBtnPressed(true);
            setFlag(false);
         }, 500);
      }
   }
   return (
      <a onClick={toggleText} href={"tel://" + decodedPhoneNumber} className={`${styles.details__item__btn} btnYellow`}>
         <span className={flag ? styles.details__item__btn__active : ""}>
            {isBtnPressed ? decodedPhoneNumber : "Get the price"}
         </span>
      </a>
   );
}
export default GetThePrice;
