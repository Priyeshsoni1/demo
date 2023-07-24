"use client"
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import Loading from "@/component/Loading/Loading";
 
const fetchhero=()=>{
 return   axios.get("https://jsonplaceholder.typicode.com/posts")
}
 
 
const Reactquery=()=>{
 
  

      const { isLoading, isError, data, error, refetch } = useQuery(["repo"], fetchhero );
    
      if (isLoading) return <><Loading/></>
    
      if (error) return 'An error has occurred: ' + error.message
    
 


 
  console.log(data.data)
   
   
 
 
  return (
    <div>
        <h2>React query</h2>
        {
            data?.data.map((item)=>{
               return <div key={item.id}>{item.id}-{ item.body} <br />  <br /> <hr /></div>
              
            })
        }
    </div>
  )
};
export default Reactquery;