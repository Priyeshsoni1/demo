import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";

import Button from "@/component/button/Button";
// export const metadata={
//   title:"Emeis technologies",
//   desc:"Build the tech",
// }
export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.title}>
          Better Design for your digital Product.
        </div>
        <p className={styles.desc}>
          Turning Your Idea into Reality.We bring toge global tech industry
        </p>
        <Button url="/portfolio" text="See Our Works"/>
       
      </div>

      <div className={styles.item}>
        <Image src={Hero} alt="image" className={styles.img} />
      </div>
    </div>
  );
}
