import styles from '../header/Header.module.scss'
import Image from 'next/image';
import logo from '../../public/images/bruce-logo-4.png'
import NavBar from '../navbar/navBar';
import { anton, zillaSlab} from '../../utils/fonts'

const Header = () => {
    return (
        <>
            <div className={`${styles.container} ${zillaSlab.className}`}>
                <Image src={logo} alt="Logo for BGC" className={styles.image}/>
                <div>
                    <h1 className={`${styles.h1} ${anton.className}`}>Barnes General Contracting</h1>
                    <h3 className={styles.h3}>Tipp City, Ohio</h3>
                    <div className={styles.contact}>
                        <a href="tel:9375243332">(937)524-3332</a>
                        <a href="mailto:bruce@bgctippcity.com">bruce@bgctippcity.com</a>
                    </div>
                    <NavBar />
                </div>
            </div>
        </>
    );
}

export default Header;