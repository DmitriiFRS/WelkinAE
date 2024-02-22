import styles from "../catalog.module.scss";
import { DataType } from "./DetailsBody";

type Props = {
   el: DataType | null;
};

function Chars({ el }: Props) {
   return (
      el && (
         <div className={styles.chars}>
            <h3 className={styles.chars__title}>Specifications</h3>
            <ul className={styles.chars__body}>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Equipment series</div>
                  <div className={styles.chars__item__value}>{el.productCard.title}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Type</div>
                  <div className={styles.chars__item__value}>{el.productCard.type}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>Size</div>
                  <div className={styles.chars__item__value}>{el.productCard.size}</div>
               </li>
               <li className={styles.chars__item}>
                  <div className={styles.chars__item__title}>HP</div>
                  <div className={styles.chars__item__value}>{el.productCard.heatOutput}</div>
               </li>
            </ul>
         </div>
      )
   );
}
export default Chars;
