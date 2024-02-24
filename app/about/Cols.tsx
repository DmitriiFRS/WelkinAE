import styles from "./about.module.scss";

const cols = [
   {
      id: 0,
      title: "Fast delivery",
      subtitle: "To your home",
   },
   {
      id: 1,
      title: "24/7 support",
      subtitle: "We're always in touch",
   },
   {
      id: 2,
      title: "Official warranty",
      subtitle: "On all products",
   },
   {
      id: 3,
      title: "Payment",
      subtitle: "Any payment method",
   },
];

function Cols() {
   return (
      <section className={styles.about__cols}>
         <h2 className={styles.about__cols__title}>What makes us stand out</h2>
         <ul className={styles.about__cols__colsBody}>
            {cols.map((el) => {
               return (
                  <li key={el.id} className={styles.about__cols__item}>
                     <div>{el.title}</div>
                     <div>{el.subtitle}</div>
                  </li>
               );
            })}
         </ul>
      </section>
   );
}
export default Cols;
