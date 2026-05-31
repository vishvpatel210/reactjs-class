import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import Api1Page from './pages/Api1Page';
import Api2Page from './pages/Api2Page';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/api1" element={<Api1Page />} />
          <Route path="/api2" element={<Api2Page />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
