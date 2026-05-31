import React from 'react'

export default function Card(props) {
  return (
    <div>
         <div className="container">
        <div className="card">
          <img
            src={props.image}
            alt=""
          />
          <div className="title">{props.title}</div>
          <div className="des">{props.des}</div>
          <button className="btn">Read More...</button>{" "}
        </div>
      </div>
    </div>
  )
}
