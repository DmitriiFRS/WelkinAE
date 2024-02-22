import styles from "../catalog.module.scss";
import Image from "next/image";
import pdf from "../../../public/svg/pdf.svg";

function CatalogPDF() {
   return (
      <div className={styles.pdf}>
         <h2>Documentation</h2>
         <a href="/catalog/catalog.pdf" download className={styles.pdf__pdfBody}>
            <Image src={pdf} alt="pdf" width={40} height={40} />
            <div className={styles.pdfBody__title}>Our catalog</div>
         </a>
      </div>
   );
}
export default CatalogPDF;
