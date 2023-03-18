import React from 'react'
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import Homeimage from "../assets/Images/homepage.png"
import "../styles/Home.css";
function Home() {
  return (
    <div>
       <img className='homeimage' src={Homeimage}/>
      <h1 className='hometext'>SRM Ghaziabad</h1>
      <div>
      <h1 className='homeh1'>SRM Institute of Science and Technology - Ghaziabad</h1>
      </div>
    </div>
   

  )
}

export default Home