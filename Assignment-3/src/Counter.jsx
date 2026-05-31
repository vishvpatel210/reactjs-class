import React from 'react'
import { useState } from 'react'

export default function Counter() {
    const [count,setCount] = useState(0);
    function handleIncrease(){
        setCount(count+1);
    }
    function handleDecrease(){
        setCount(count-1);
    }
    function reset(){
        setCount(0);
    }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleIncrease}>increase</button>
      <button onClick={handleDecrease}>decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
