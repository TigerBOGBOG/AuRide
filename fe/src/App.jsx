import { useState } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/home";
import Signin from "./components/Signin/signin";
import Signup from "./components/Signup/signup";


import './App.css'

function App() {
    return(
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Signin/>} />
      <Route path="/register" element={<Signup/>} />
      <Route path="/home" element={<Home/>} />
    </Routes>
    );

}
export default App
