import logo from './logo.svg';
import './App.css';
import Card from './Components/Card';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Navbar from './Components/Shared/Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home';

function App() {
  return (
    <div className="App">
     <Navbar></Navbar>
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
     </div>
  );
}

export default App;
