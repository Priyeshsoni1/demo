"use client"

import Loading from '@/component/Loading/Loading';
import { useQuery } from '@tanstack/react-query';
import axios from "axios"
import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component';
const infinite = () => {

const [items, setItems] = useState([]);

const [hasMore, setHasMore] = useState(true);

const [page, setpage] = useState(2);


        const  {isLoading,isError,data}=useQuery(["Data_fetch"],async ()=>{
            const res = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10&_page=1");
           console.log(res.data)
           setItems(res.data);
               return res.data;
              
           }
         
           )


if(isError) return <div>Some thing went wrong</div>
console.log(data)

        

const fetchComments = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10&_page=${page}`
  );

  const data = await res.json();
  return data;
};

const fetchData = async () => {
  const commentsFormServer = await fetchComments();

  setItems([...items, ...commentsFormServer]);
  if (commentsFormServer.length === 0 || commentsFormServer.length < 10) {
    setHasMore(false);
  }
  setpage(page + 1);
};



  return (
    <div>
        <InfiniteScroll
    dataLength={items.length}
    next={fetchData}
    hasMore={hasMore}
    loader={<Loading/>}
    endMessage={
        <p style={{textAlign: 'center'}}>
          <b>Yay! You have seen it all</b>
        </p>
      }
    
  >
    <div >
    {
           items?.map((item)=>{
               return <div key={item.id} style={{margin:"30px"}}>
                <span>{item.id}</span>
               <div> { item.body}</div>
                
                
                
                </div>
            })
        }
    </div>
    
  </InfiniteScroll>
    </div>
  )
}

export default infinite
