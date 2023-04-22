import styles from '../styles/component/Header.module.scss'
import Image from 'next/image';
import image from '../public/assets/bruce-logo-4.png'

export default function Header() {
    return (
        <>
            <div className={styles.container}>
                <Image src={image} alt="Logo for BGC" className={styles.image}/>
                <div>
                    <h1 className={styles.h1}>Barnes General Contracting</h1>
                    <h3 className={styles.h3}>Tipp City, Ohio</h3>
                    <div className={styles.contact}>
                        <a href="tel:9375243332">(937)524-3332</a>
                        <a href="mailto:bruce@bgctippcity.com">bruce@bgctippcity.com</a>
                    </div>
                </div>
            </div>
        </>
    );
}