import styles from "./homepage.module.scss";
import Image from "next/image";
import pwr from "../../../public/img/homepage/pwr.jpg";
import rooftop from "../../../public/img/homepage/rooftop.jpg";
import vrf from "../../../public/img/homepage/vrf.jpg";
import chiller from "../../../public/img/homepage/chiller.jpg";
import Link from "next/link";
import EquipInnerTitle from "./EquipInnerTitle";

const equip = [
   {
      id: 0,
      title: "AHU",
      img: pwr,
      className: styles.equip__pwr,
      imgClassName: styles.equip__pwrImg,
      gridArea: "pwr",
   },
   {
      id: 1,
      title: "Rooftop",
      img: rooftop,
      className: styles.equip__rooftop,
      imgClassName: styles.equip__rooftopImg,
      gridArea: "rooftop",
   },
   {
      id: 2,
      title: "VRF",
      img: vrf,
      className: styles.equip__vrf,
      imgClassName: styles.equip__vrfImg,
      gridArea: "vrf",
   },
   {
      id: 3,
      title: "Chiller-fancoil",
      img: chiller,
      className: styles.equip__chiller,
      imgClassName: styles.equip__chillerImg,
      gridArea: "chiller",
   },
];

function Equip() {
   return (
      <div className={styles.equip}>
         <div className="container">
            <div className={styles.equip__titleBody}>
               <h2 className={styles.equip__title}>Our equipment</h2>
               <Link className={styles.equip__catalogLink} href="/catalog">
                  <button className={styles.equip__catalog}>Our catalog</button>
               </Link>
            </div>
            <div className={styles.equip__itemsBody}>
               <Link
                  href={{
                     pathname: "/catalog",
                     query: { name: "ahu" },
                  }}
                  className={`${styles.equip__item1} ${styles.equip__items}`}
               >
                  <EquipInnerTitle title={"AHU"} style={styles.equip__innerTitleBody} />
                  <div className={`${styles.equip__item1__imgBody} ${styles.equip__items__imgBody}`}>
                     <Image src={pwr} alt="ПВУ" fill />
                  </div>
               </Link>
               <Link
                  href={{
                     pathname: "/catalog",
                     query: { name: "rooftop" },
                  }}
                  className={`${styles.equip__item2} ${styles.equip__items}`}
               >
                  <EquipInnerTitle title={"Rooftop"} style={styles.equip__innerTitleBody2} />
                  <div className={`${styles.equip__item2__imgBody} ${styles.equip__items__imgBody}`}>
                     <Image src={rooftop} alt="rooftop" fill />
                  </div>
               </Link>
               <div className={styles.equip__item3}>
                  <Link
                     href={{
                        pathname: "/catalog",
                        query: { name: "vrf" },
                     }}
                     className={`${styles.equip__item3__subitem1} ${styles.equip__items}`}
                  >
                     <EquipInnerTitle title={"VRF"} style={styles.equip__innerTitleBody3} />
                     <div className={`${styles.equip__item3__subitem1__imgBody} ${styles.equip__items__imgBody}`}>
                        <Image src={vrf} alt="vrf" fill />
                     </div>
                  </Link>
                  <Link
                     href={{
                        pathname: "catalog",
                        query: { name: "fancoil" },
                     }}
                     className={`${styles.equip__item3__subitem2} ${styles.equip__items}`}
                  >
                     <EquipInnerTitle title={"Chiller-fancoil"} style={styles.equip__innerTitleBody4} />
                     <div className={`${styles.equip__item3__subitem2__imgBody} ${styles.equip__items__imgBody}`}>
                        <Image src={chiller} alt="vrf" fill />
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}
export default Equip;
