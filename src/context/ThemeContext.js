"use client";

import {createContext, useState, useEffect} from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
   const [mode, setMode] = useState("dark");

   const toggle = () => {
    
    if (mode === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
   } else {
      setMode("dark");
      localStorage.setItem("mode", "dark");
   }
      
   };

   useEffect(() => {
    setMode(localStorage.getItem("mode"));
 }, [mode]);

   return (
      <ThemeContext.Provider value={{toggle, mode}}>
         <div className={`theme ${mode}`}>{children}</div>
      </ThemeContext.Provider>
   );
};
