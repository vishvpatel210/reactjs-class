import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
      const [mode,setmode] = useState("black");
     function changeTheme(){
    if(mode == "black"){
      document.body.style.backgroundColor= "white";
      setmode("light")
     }

     else{
      document.body.style.backgroundColor= "black";
      setmode("black");
     }
    }
      
      
  return (
    <>
      <button onClick={changeTheme}>{mode=="black"? "whiteMode" : "blackmode"}</button>
    </>
  )
}

export default App
