import styles from "../homepage.module.scss";
import Inputs from "./Inputs";

function ContactUs() {
   return (
      <div className={styles.contactUs}>
         <div className={`container ${styles.contactUs__container}`}>
            <div className={styles.contactUs__titleBody}>
               <h2 className={styles.contactUs__title}>Contact us</h2>
               <p className={styles.contactUs__subtitle}>
                  Our experienced specialists are ready to take on any task with Welkin equipment. We guarantee that you
                  will receive the optimal solution that meets your needs and budget.
               </p>
            </div>
            <Inputs />
         </div>
      </div>
   );
}
export default ContactUs;
