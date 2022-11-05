import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";

import HomePage from "./Pages/Homepage";

const App = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="" element={<HomePage />} />
       
        <Route path="/about" element={<About />} />

        
      </Routes>
      
    </Router>
  );
};


export default App;
