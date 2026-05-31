import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0);
  let value = useRef(0);
  value.current = value.current + 1;

  let color = useRef();
  function colorUpadate(){
    color.current.style.color="red";
    
  }

  return (
    <>
      <p>vlaue: {value.current}</p>
      <p>count: {count}</p>
      <button onClick={()=> setCount(count+1)}>click</button>


      <p refc={color}>my name is vishv </p>
      <button onChange={colorUpadate}>click me</button>
    </>
  )
}

export default App
