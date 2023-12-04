import axios from "axios";
import { useEffect, useState } from "react"
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";
export default function Random() {
 

  const {gif,spinner,fetchData}=useGif();
  
  function clickHandeler(){
    fetchData();
  }


  return(

    
    <div className="w-1/2  bg-green-500 border border-black rounded-lg flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className=" mt-[15px] text-2xl underline uppercase font-bold">A  Random Gif</h1>
    
    {
        spinner ? (<Spinner/>)  : (<img src={gif} width={450}/>)
    }
       
      <button onClick={clickHandeler} className="w-10/12  mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg">Generate</button>
    </div>

  ) 
}
