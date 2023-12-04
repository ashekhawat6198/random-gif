import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Tag() {
  // const API_KEY=process.env.REACT_APP_GIPHY_API_KEY;
  // const [gif,setGif]=useState('');
  // const [spinner,setLoading]=useState(false);
  const [tag,setTag]=useState("");  

  function changeHandeler(event){
       setTag(event.target.value);
  } 
  // async function fetchData(){
  //   setLoading(true);
  //   const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //   const {data}=await axios.get(url);
  //   const imageSource=data.data.images.downsized_large.url;
  //   setGif(imageSource);
  //   setLoading(false);
  // }


   const {gif,spinner,fetchData}=useGif(tag); 
  useEffect(()=>{
      fetchData();
  },[])
  
  function clickHandeler(){
    fetchData(tag);
  }


  return(

    
    <div className="w-1/2  bg-blue-500 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">Random Gif</h1>
    
    {
        spinner ? (<Spinner/>)  : (<img src={gif} width={450}/>)
    }
       
       <input  className="w-10/12 mb-[3px] text-lg py-2 rounded-lg text-center " onChange={changeHandeler} value={tag}/>
      <button onClick={clickHandeler} className="w-10/12  mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg">Generate</button>
    </div>

  ) 
}
 