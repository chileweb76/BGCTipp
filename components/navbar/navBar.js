import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../navbar/NavBar.module.scss"


const NavBar = () => {
    const router = useRouter();
    const currentRoute = router.pathname;

    return (
        <nav className={styles.nav}>
            <Link href='/' className={`${currentRoute === '/' ? styles.active : styles.nonActive} ${styles.link}`}>Home</Link>
            <Link href='/gallery' className={`${currentRoute === '/gallery' ? styles.active : styles.nonActive} ${styles.link}`}>Gallery</Link>
            <Link href='/about' className={`${currentRoute === '/about' ? styles.active : styles.nonActive} ${styles.link}`}>About</Link>
            <Link href='/contact' className={`${currentRoute === '/contact' ? styles.active : styles.nonActive} ${styles.link}`}>Contact</Link>
        </nav>
    );
}

export default NavBar;