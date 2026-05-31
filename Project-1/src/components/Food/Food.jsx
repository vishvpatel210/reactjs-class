import { useEffect, useState } from "react";
import "./Food.css";
export const Food = () => {
  const [meal, setmeal] = useState([]);

  useEffect(() => {
    fetch(
      "https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes&rapidapi-key=4f8f32c8d4msha5cf03fafd60bb8p19d251jsnf283b3464c78"
    )
      .then((res) => res.json())
      .then((data) => setmeal(data.results));
  }, []);

  return (
    <>
      <div className="box">
        {meal.map((ele) => (
          <div className="container">
            <div className="img-box">
                <img src={ele.thumbnail_url} className="img-meal" alt="" />
            </div>
            <div className="img-name">{ele.name}</div>
          </div>
        ))}
      </div>
    </>
  );
};
