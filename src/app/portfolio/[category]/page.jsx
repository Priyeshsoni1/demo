import React from "react";
import styles from "./page.module.css";

import Button from "@/component/button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }

  return notFound();
};
// export async function generateMetadata({params}){
//   const post=getData(params.id)
//   console.log(post);
//   return{
//     title:post.title,
//     desc:post.desc,
//   }

// }

const Category = ({ params }) => {
  const data = getData(params.category);
  console.log(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>

      {data.map((item) => (
        <div className={styles.item} key={item.id}>
          <div className={styles.content}>
            <h1 className={styles.title}>{item.title}</h1>
            <p className={styles.desc}>{item.desc}</p>
            <Button text="See More"  />
          </div>
          <div className={styles.imgContainer}>
            <Image
              className={styles.img}
              fill={true}
            src={item.image}
              alt="image"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Category;