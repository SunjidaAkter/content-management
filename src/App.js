import logo from "./logo.svg";
import "./App.css";
import Card from "./Components/Card";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Navbar from "./Components/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Pages/Home";
import AddContent from "./Components/Pages/Dashboard/AddContent";
import Signup from "./Components/Pages/Signup";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<AddContent />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
