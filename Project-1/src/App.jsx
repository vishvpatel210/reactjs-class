import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Food } from "./components/Food/Food";
import { Movies } from "./components/Movies/Movies";
import { Recipes } from "./components/recipes/Recipes";
import { Fake } from "./components/FakeStore/Fake";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Food" element={<Food />}></Route>
          <Route path="/Movies" element={<Movies />}></Route>
          <Route path="/recipes" element={<Recipes />}></Route>
          <Route path="/FakeStore" element={<Fake />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
