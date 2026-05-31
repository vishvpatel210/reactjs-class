import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Home from "./pages/Home.jsx"
import Nav from "./components/Nav.jsx"
import Service from './components/Service.jsx'
import Social from './components/Social.jsx'

export default function App() {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
      <Social/>
      <Service/>
      
    </>
  )
}