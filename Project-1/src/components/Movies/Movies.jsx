import { useState,useEffect } from "react";


export const Movies = ()=>{
   const [Movies,setmovie] = useState([])
    
   useEffect(()=>{
        fetch("https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY&rapidapi-key=4f8f32c8d4msha5cf03fafd60bb8p19d251jsnf283b3464c78")
        .then((res)=> res.json())
        .then((data1)=> setmovie(data1.data.news.edges))
   },[]);

   return (
    <>
      <div className="box">
        {Movies.map((ele) => (
          <div className="container">
            <div className="img-box">
                <img src={ele.node.image.url} className="img-meal" alt="" />
            </div>
            <div className="img-name">{ele.node.byline}</div>
          </div>
        ))}
      </div>
    </>
  );
}