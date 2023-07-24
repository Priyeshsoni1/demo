"use client";
import Link from "next/link";
import React, {Component} from "react";
import styles from "./navbar.module.css";
import DarkMode from "../darkMode/DarkMode";
import Image from "next/image";

const Navbar = () => {
   const links = [
      {
         id: 1,
         title: "Home",
         url: "/",
      },
      {
         id: 2,
         title: "Portfolio",
         url: "/portfolio",
      },
      {
         id: 3,
         title: "Blog",
         url: "/blog",
      },
      {
         id: 4,
         title: "About",
         url: "/about",
      },
      {
         id: 5,
         title: "Contact",
         url: "/contact",
      },
      {
         id: 6,
         title: "Dashboard",
         url: "/dashboard",
      },
      {
         id:7,
         title:"React-Query",
         url:"/reactQuery",
      },
      {
         id:8,
      title:"React-infinite",
   url:"/infinite"      },     {
      id:9,
   title:"Formik",
url:"/formik"      }
   ];

   return (
      <div className={styles.container}>
         <Link href="/" className={styles.loogo}>
            <Image
               className={styles.logo}
               src="https://images.unsplash.com/photo-1584441405886-bc91be61e56a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=430&q=80"
               alt="image"
               width={100}
               height={100}
            />
            <span className={styles.title}>@Emeis</span>
         </Link>
         <div className={styles.links}>
            <DarkMode />
            {links.map((link) => (
               <Link className={styles.link} href={link.url} key={link.id}>
                  {link.title}
               </Link>
            ))}
            <button
               className={styles.logout}
               onClick={() => console.log("Logout")}
            >
               Logout
            </button>
         </div>
      </div>
   );
};

export default Navbar;
