import { useState,useEffect } from "react";
import "../Food/Food.css";

export const Fake = ()=>{
   const [FakeStore,setfake] = useState([])
    
   useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then((res)=> res.json())
        .then((data1)=> setfake(data1))
   },[]);

   return (
    <>
      <div className="box">
        {FakeStore.map((ele) => (
          <div className="container">
            <div className="img-box">
                <img src={ele.image} className="img-meal" alt="" />
            </div>
            <div className="img-name">{ele.description}</div>
          </div>
        ))}
      </div>
    </>
  );
}