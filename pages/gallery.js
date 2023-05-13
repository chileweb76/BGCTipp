import Image from "next/image";
import styles from "../styles/Gallery.module.scss";
import acInstall from "../public/images/acinstall.jpeg";
import acInstall2 from "../public/images/acinstall2.jpeg";
import acInstall3 from "../public/images/acinstall3.jpeg";
import doors from "../public/images/doors.jpeg";
import doorInstall from "../public/images/doorinstall.jpeg";
import electrical from "../public/images/electrical.jpeg";
import doorframe from "../public/images/doorframe.jpeg";
import lattice from "../public/images/lattice.jpeg";
import unit from "../public/images/unit.jpeg";

const Gallery = () => {
    return (
        <>
            <h2 className={styles.h2}>Gallery</h2>
            <div className={styles.container}>
            <Image src={acInstall} alt="ac unit installation" className={styles.image} />
            <Image src={acInstall2} alt="ac unit installation" className={styles.image} />
            <Image src={acInstall3} alt="ac unit installation" className={styles.image} />
            <Image src={doors} alt="doors ready for installation" className={styles.image} />
            <Image src={doorframe} alt="framing of door for installation" className={styles.image} />
            <Image src={doorInstall} alt="door after installation" className={styles.image} />
            <Image src={electrical} alt="electrical unit testing" className={styles.image} />
            <Image src={unit} alt="electrical box unit" className={styles.image} />
            <Image src={lattice} alt="garden lattice installed" className={styles.image} />
            </div>
        </>
    )
}
export default Gallery;