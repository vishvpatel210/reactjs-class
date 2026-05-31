import { useState,useEffect } from "react";
import "../Food/Food.css";

export const Recipes = ()=>{
   const [Recipe,setrecipes] = useState([])
    
   useEffect(()=>{
        fetch("https://dummyjson.com/recipes")
        .then((res)=> res.json())
        .then((data1)=> setrecipes(data1.recipes))
   },[]);

   return (
    <>
      <div className="box">
        {Recipe.map((ele) => (
          <div className="container">
            <div className="img-box">
                <img src={ele.image} className="img-meal" alt="" />
            </div>
            <div className="img-name">{ele.instructions}</div>
          </div>
        ))}
      </div>
    </>
  );
}