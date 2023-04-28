import styles from '../footer/Footer.module.scss';
import { zillaSlab } from '@/utils/fonts';

const Footer = () => {
    return (
        <>
            <p className={`${styles.p} ${zillaSlab.className}`}>©2023 Barnes General Contracting</p>
        </>
    );
}

export default Footer;