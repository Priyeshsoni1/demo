import React from 'react'
import Image from 'next/image'
import styles from "./footer.module.css"
const Footer = () => {
  return (
    <div className={styles.container}>
<div>@2023 Emeis All rights are reserved</div>
<div className={styles.social}>
    <Image alt='image' src="/1.png" width={15} height={15} className={styles.icon}/>
    <Image alt='image' src="/2.png" width={15} height={15} className={styles.icon}/>
    <Image alt='image' src="/3.png" width={15} height={15} className={styles.icon}/>
    <Image alt='image' src="/4.png" width={15} height={15} className={styles.icon}/>
</div>
    </div>
  )
}

export default Footer
