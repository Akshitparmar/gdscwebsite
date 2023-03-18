import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

import HomePage from "./Pages/Homepage";
import Header from "./components/Header";
import Contact from "./components/Contactus";
import Privacy from "./components/Privacy";
import Terms from "./components/Terms";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Teampage from "./Pages/Teampage";
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="" element={<HomePage />} />
       
        <Route path="/about" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Privacy" element={<Privacy />} />
        <Route path="/Terms" element={<Terms />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/team" element={<Teampage />} />



        
      </Routes>
      <Footer />
      
    </Router>
  );
};


export default App;
