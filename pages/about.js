import styles from "../styles/About.module.scss";
import Link from "next/link";

const About = () => {
    return (
        <>
            <h2 className={styles.h2}>About</h2>
            <div className={styles.container}>
                <p className={styles.p}>Bruce Barnes has been in trades for over 30 years.  Married for 24 years to his wife Katie, he is born and raised here in the Tipp City area.  Skilled in many areas such as painting, plumbing, electrical panels, drywall, framing, fencing, roof repairs, bath remodels, decks, doors, windows, appliances, and more: you name it, Bruce can take care of it for you!  He can supply references on demand, and is happy to answer any questions you may have by contacting him at <a href="tel:9375243332" className={styles.a}>(937)524-3332</a>, <a href="mailto:bruce@bgctippcity.com" className={styles.a}>bruce@bgctippcity.com</a>, or on the <Link href='/contact' className={styles.a}>contact form.</Link></p>
            </div>
        </>
    )
}
export default About;