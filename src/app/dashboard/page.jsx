"use client";
// import { signIn } from 'next-auth/react'
// import React from "react";
// import { useSession } from "next-auth/react";
// const Dashboard = () => {
//   const session = useSession();
//   console.log(session);
//   return <div> <button onClick={()=>signIn("google")}>signIn</button></div>;
// };

// export default Dashboard;
import {useSession, signIn, signOut} from "next-auth/react";
export default function IndexPage() {
   const session = useSession();
   // if (status === 'loading') return <h1> loading... please wait</h1>;

   // if (status === 'authenticated') {

   console.log(session);
   //   return (
   //     <div>
   //       {/* <h1> hi {data.user.name}</h1> */}
   //      {/* <img src={data.user.image} alt={data.user.name + ' photo'} />   <img src={data.user.image} alt={data.user.name + ' photo'} /> */}
   //       <button onClick={signOut}>sign out</button>
   //     </div>
   //   );
   // }
   // console.log(status,data);
   return (
      <div>
         <button onClick={() => signIn("google")}>sign in with gooogle</button>
         <button onClick={() => signOut()}>LogOut</button>
      </div>
   );
}
