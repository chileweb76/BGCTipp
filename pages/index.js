import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import left from '../public/images/hammer.jpg'
import right from '../public/images/hammer_plier.png'
import hvac from '../public/images/hvac.jpg'
import waterHeater from '../public/images/water_heater.jpg'
import electrical from '../public/images/electric.jpg'
import { zillaSlab } from '@/utils/fonts'

export default function Home() {
  return (
    <>
      <Head>
        <title>Barnes General Contracting</title>
        <meta name="description" content="Bruce Barnes General Contracting Tipp City, Ohio. Handyman. Fully insured." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <main className={zillaSlab.className}>
        <div className={styles.container}>
          <Image src={left} alt="hammer nails on board" className={styles.image} />
          <div>
            <h2 className={styles.h2}>Fully Insured</h2>
            <h2 className={styles.h2}>Handyman</h2>
            <p className={styles.p}>Available for small jobs.</p>
            <p className={styles.p}>A day or two turnaround.</p>
          </div>
          <Image src={right} alt="hammer, pliers, paint stirrer" className={styles.image} />
        </div>
        <h2 className={styles.h2}>Specialized in:</h2>
          <div className={styles.container}>
            <p className={styles.p}>Heating and Air Conditioning</p>
            <Image src={hvac} alt="heating/ac display unit" className={styles.image2} />
          </div>
          <div className={styles.container}>
            <Image src={waterHeater} alt="man repairing water heater" className={styles.image2} />
            <p className={styles.p}>Water Heater</p>
          </div>
          <div className={styles.container}>
            <p className={styles.p}>Electrical Work</p>
            <Image src={electrical} alt="electrical equipment" className={styles.image2} />
          </div>
          <div className={styles.container}>
            <p className={styles.p}>And Much More</p>
          </div>
     </main>
    </>
  )
}
