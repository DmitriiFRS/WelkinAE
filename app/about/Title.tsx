import styles from "./about.module.scss";
import Image from "next/image";
import head from "../../public/img/about/aboutHead.jpg";

function Title() {
   return (
      <section className={styles.about__main}>
         <div className={styles.about__imgBody}>
            <Image src={head} alt="Welkin" fill />
         </div>
         <div className={styles.about__titleBody}>
            <h2 className={styles.about__title}>About us</h2>
            <p className={styles.about__subtitle}>
               Welkin Company is your reliable partner for home appliances in UAE! Our company was founded on the
               principles of quality, reliability and professionalism, and since then we have been striving to make the
               everyday life of our customers more comfortable and efficient. of our customers more comfortable and
               efficient. With Welkin your home becomes a place where quality, comfort and innovation are combined to
               create a cozy and modern space for you and your loved ones. Our team has been providing air conditioning
               and ventilation services of any complexity and scale since 2008.
            </p>
         </div>
      </section>
   );
}
export default Title;
