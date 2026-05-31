import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/Nav12.jsx";
import Cardholder from "./components/Cardholder.jsx";
import Count from "./components/Count.jsx";

function App() {

  var[count,setCount] = useState(0);
  var[msg,setMsg] = useState("Before Click Me btn is hitted");
  var[flag,setFlag] = useState(true);

  function handleClick(){
    setCount(++count);
    setMsg("after btn hitted msggot change")
  }

  return (
    <>
      <NavBar />
      <div className="cardholder">
        <Cardholder />
      
      </div>

      <div className="task3">
        <div className="card1">
          <div className="img-name">SpiderMan</div>
          <img
            src="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="point">12</div>
        </div>
        <div className="card1">
          <div className="img-name">SpiderMan</div>
          <img
            src="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="point">12</div>
        </div>

        <div className="card1">
          <div className="img-name">SpiderMan</div>
          <img
            src="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="point">12</div>
        </div>

        <div className="card1">
          <div className="img-name">SpiderMan</div>
          <img
            src="https://images.unsplash.com/photo-1766039132515-ea88dc3950bd?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="point">12</div>
        </div>
      </div>

      <div className="calculator">
        <div className="display">7744</div>
        <div className="keys">
          <div className="btn1 box1">c</div>
          <div className="btn1 box1">+/-</div>
          <div className="btn1 box1">%</div>
          <div className="btn1 box2">/</div>
          <div className="btn1 box3">7</div>
          <div className="btn1 box3">8</div>
          <div className="btn1 box3">9</div>
          <div className="btn1 box2">X</div>
          <div className="btn1 box3">4</div>
          <div className="btn1 box3">5</div>
          <div className="btn1 box3">6</div>
          <div className="btn1 box2">-</div>
          <div className="btn1 box3">1</div>
          <div className="btn1 box3">2</div>
          <div className="btn1 box3">3</div>
          <div className="btn1 box2">+</div>
          <div className="box3 big">0</div>
          <div className="btn1 box3">.</div>
          <div className="btn1 box2">=</div>
        </div>
      </div>

      <section>
        <img
          src="https://images.unsplash.com/photo-1766068621525-804333ec0f11?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img1"
        />
        <img
          src="https://images.unsplash.com/photo-1761839258513-099c3121d72d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img2"
        />
        <img
          src="https://images.unsplash.com/photo-1766338796858-f098f2fa5602?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img3"
        />
        <img
          src="https://images.unsplash.com/photo-1765568562583-4252b2d854b0?q=80&w=765&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img4"
        />
        <img
          src="https://images.unsplash.com/photo-1761839257661-c2392c65ea72?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img5"
        />
        <img
          src="https://images.unsplash.com/photo-1766221072212-cf2f9383221c?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img6"
        />
        <img
          src="https://images.unsplash.com/photo-1766391374856-eccaa085b661?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
          className="img7"
        />
      </section>

      <p>Count:{count} </p>
      <button type="button" onClick={handleClick}>ClickMe</button>

       <Count/>
    </>
  );
}

export default App;
