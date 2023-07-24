import {NextResponse} from "next/server";


export const GET = async (req) => {

     try {
          return new NextResponse(JSON.stringify({message:"Hello"}), {
               statusText: "Successfull",
            });
          
     } catch (error) {
          console.log(error);
          
     }
     
};