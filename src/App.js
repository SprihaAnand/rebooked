import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Exchange from "./pages/Exchange";
import Rebook from "./pages/Rebook";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import Organisation from "./pages/Organisation";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/exchange" element={<Exchange />} />
        <Route path="/rebook" element={<Rebook />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/organisation" element={<Organisation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
