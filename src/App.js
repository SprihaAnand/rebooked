import ReactDOM from "react-dom/client";
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
import School from "./pages/School";
import Donate from "./pages/Donate";
import OrgUser from "./pages/OrgUser";
import Wishlist from "./pages/Wishlist";

import { HashRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.StrictMode>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="/signup" element={<SignUp />} />
          <Route path="/about" element={<About />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/rebook" element={<Rebook />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/organisation" element={<Organisation />} />
          <Route path="/school" element={<School />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/orguser" element={<OrgUser />} />
          <Route path="/wishlist" element={<Wishlist />} />
        </Routes>
      </HashRouter>
    </React.StrictMode>
  );
}

export default App;
