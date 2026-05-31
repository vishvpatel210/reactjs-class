import React from "react";
import { useState } from "react";

const Count = () => {
  var [count, setCount] = useState(0);
  function handleClick() {
    setCount(++count);
  }

  return (
    <>
      <p>Count: {count}</p>
      <button type="button" onClick={handleClick}>
        ClickMe
      </button>
    </>
  );
};

export default Count;
