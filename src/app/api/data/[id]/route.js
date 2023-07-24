import {NextResponse} from "next/server";


export const GET = async (req) => {

     try {
          return new NextResponse(JSON.stringify({message:"single Page"}), {
               statusText: "Successfull",
            });
          
     } catch (error) {
          console.log(error);
          
     }
     
};