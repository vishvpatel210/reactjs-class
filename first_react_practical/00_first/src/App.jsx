import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  return (
    // <div>
    //   <p>Hello</p>
    //   <h1>greeting</h1>
    // </div>

    <>
      <p style={{border: "2px solid black",backgroundColor:"red"}}>Hello</p>
      <h1 className="first_h1">Greeting</h1>
      <img src={reactLogo} alt="" />
    </>
  );
}

export default App;
