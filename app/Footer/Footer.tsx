import styles from "./footer.module.scss";
import Image from "next/image";
import logo from "../../public/svg/logo.svg";
import Link from "next/link";
import { fetchGraphqlData } from "../Utilities/FetchData";

type PhoneNumber = {
   phoneNumber: {
      number: string;
   };
};
type Socials = {
   id: string;
   footer: {
      footersocial: string;
      href: string;
   };
};
type FooterData = {
   data: {
      phones: {
         nodes: Array<PhoneNumber>;
      };
      footer: {
         nodes: Array<Socials>;
      };
   };
};

async function Footer() {
   const data: FooterData = await fetchGraphqlData(`
   query {
      phones {
         nodes {
           phoneNumber {
             number
           }
         }
       }
       footer {
         nodes {
            id
           footer {
             footersocial
             href
           }
         }
       }
       }
   `);
   return (
      <div className={`container ${styles.footer}`}>
         <div className={styles.footer__logoBody}>
            <Link href={"/"}>
               <div className={styles.footer__logoImgBody}>
                  <Image src={logo} alt="welkin" fill />
               </div>
            </Link>
            <Link href={"/Privacy-policy"}>
               <div className={styles.footer__subtitle}>privacy policy</div>
            </Link>
         </div>
         <div className={styles.footer__cols}>
            <div className={styles.footer__cols__items}>
               <h3 className={styles.footer__cols__title}>Navigation</h3>
               <ul className={styles.footer__cols__list}>
                  <li className={styles.footer__cols__item}>
                     <Link className={styles.footer__cols__itemBody} href={"/catalog"}>
                        Catalog
                     </Link>
                  </li>
                  <li className={styles.footer__cols__item}>
                     <Link className={styles.footer__cols__itemBody} href={"/about"}>
                        About us
                     </Link>
                  </li>
                  <li className={styles.footer__cols__item}>
                     <Link className={styles.footer__cols__itemBody} href={"/faq"}>
                        FAQ
                     </Link>
                  </li>
               </ul>
            </div>
            <div className={styles.footer__cols__items}>
               <h3 className={styles.footer__cols__title}>Contacts</h3>
               <ul className={styles.footer__cols__list}>
                  <li className={styles.footer__cols__item}>{data.data.phones.nodes[0].phoneNumber.number}</li>
                  <li className={`${styles.footer__cols__item} ${styles.footer__cols__itemMail}`}>
                     sales@welkingroup.ru
                  </li>
               </ul>
            </div>
            <div className={styles.footer__cols__items}>
               <h3 className={styles.footer__cols__title}>Social</h3>
               <ul className={styles.footer__cols__list}>
                  {data.data.footer.nodes.map((el) => {
                     return (
                        <li key={el.id} className={styles.footer__cols__item}>
                           <Link className={styles.footer__cols__itemLink} href={el.footer.href}>
                              {el.footer.footersocial}
                           </Link>
                        </li>
                     );
                  })}
               </ul>
            </div>
         </div>
      </div>
   );
}
export default Footer;

// <li className={styles.footer__cols__item}>Telegram</li>
