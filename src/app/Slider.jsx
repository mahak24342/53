"use client"
import React,{useEffect, useState} from 'react';
import Image from 'next/image';
const data=[
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31Wx7M1wwJL._SX300_SY300_QL70_FMwebp_.jpg",
    "https://m.media-amazon.com/images/W/MEDIAX_792452-T2/images/I/31Vle5fVdaL._SY445_SX342_QL70_FMwebp_.jpg"
]
const Slider = () => {
const [imageI,setImageI]=useState(1);
const prevClick=()=>{
    setImageI(
        !imageI ? data.length-1 : imageI -1
    );    
}
const nextClick=()=>{
    setImageI((imageI+1)%data.length);
};
useEffect(()=>{
    const timer=
    setTimeout(()=>{
        nextClick();
    },5000);
    return ()=>{
        clearTimeout(timer);
    }
},[imageI]);
  return (
    <div className='flex justify-center items-centerss'>
        <button className='font-bold p-6 uppercase  m-10 flex items-center mt-64 bg-slate-500 w-35 h-9  text-white' onClick={prevClick}>Left</button>
   {
    data.map((url,i)=>(
        <img src={url} key={url} className={"w-[700px] h-[500px] object-contain " +(imageI === i ? "block":"hidden" )}alt=""/>
    
        ))
   }
        <button  className='font-bold p-4 m-10 flex  items-center uppercase mt-64 bg-slate-500 w-35 h-9 text-white' onClick={nextClick}>Right</button>
    </div>
  )
}

export default Slider
