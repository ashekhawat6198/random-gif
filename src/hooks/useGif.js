import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
export default function useGif(tag) {
    const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
    const [gif,setGif]=useState('');
    const [spinner,setLoading]=useState(false);
    const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
    const tagmemeurl=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;

    async function fetchData(tag){
        setLoading(true);
       
        const {data}=await axios.get(tag ? tagmemeurl : url);
        const imageSource=data.data.images.downsized_large.url;
        setGif(imageSource);
        setLoading(false);
      } 
      
      useEffect(()=>{
        fetchData();
    },[])
    

    return {gif,spinner,fetchData}
}
