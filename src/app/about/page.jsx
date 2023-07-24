import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/component/button/Button";
const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="/logo-white.png"
          fill={true}
          alt="image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>I am Story Teller</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award Winning digital experiences
          </h2>
        </div>
      </div>

      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum nisi
            harum id porro consequatur sunt quis unde quam? Quidem earum animi
            sapiente minima adipisci ducimus aperiam ex sunt libero vel. Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate
            molestias natus aliquid dolor velit expedita esse pariatur excepturi
            nostrum officia harum, unde ipsam nemo. Reprehenderit animi quisquam
            fuga aspernatur distinctio?
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We Do?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
            quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
            suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
            eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
            Creative Illustrations
            <br />
            <br /> - Dynamic Websites
            <br />
            <br /> - Fast and Handy
            <br />
            <br /> - Mobile Apps
          </p>
          <Button url="/contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
