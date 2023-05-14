import React from "react";
import Image from "next/image";
import styles from "../styles/Gallery.module.scss";
import gallery from "../utils/images.json"

const Gallery = () => {
    return (
        <>
            <h2 className={styles.h2}>Gallery</h2>
            <div className={styles.container}>
                
            {gallery.map((gallery) => {
                const img = require(`../public/images/${gallery.src}`)
                return (
                        <Image key={gallery.id} src= {img} alt={gallery.alt} className={styles.image} />
                )
            })
            }
            </div>
        </>
    )
}
export default Gallery;