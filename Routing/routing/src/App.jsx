import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cardholder from "./components/Cardholder";

function App() {
  return (
    <>
      <h1>my name is vishv patel</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>good</h1>}></Route>
          <Route path="/card" element={<Cardholder />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
