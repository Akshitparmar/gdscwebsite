import React from 'react'
import { Container } from 'react-bootstrap';
import "../styles/About.css";
import blue from "../assets/Images/blue.png";
import red from "../assets/Images/red.png";
import green from "../assets/Images/green.png"
import yellow from "../assets/Images/yellow.png"
import puzzel from "../assets/Images/aboutpuzzel.png"
import aboutimg2 from "../assets/Images/aboutimg2.png"
import aboutimg3 from "../assets/Images/aboutimg3.png"





function About() {

  return (
    <div>
      <h1 className='abouth1'>About Us</h1>
      <Container className='aboutcontainer'>
        
        <div>
          <p className='abouttext'>Google Developer Student Clubs (GDSC) are university-based community groups powered by Google Developers for students interested in Technology.<br /> 
          The aim is to help students bridge the gap between theory and practice. By joining GDSC, students can grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their communities.
          We are a group of students who are passionate about Technology.<br />
          Our goal is to bring students together from various backgrounds who love learning and applying their skills to solve real-world problems.<br />
          And make you connect with different developers across the world.</p>
        
         
        </div>
      </Container>
      <div>
         <img className='aboutcolorimg' src={blue}/>
          <img className='aboutcolorimg' src={red}/>
      </div>
      <div>
          <img className='aboutcolorimg1' src={green}/>
          <img className='aboutcolorimg1'src={yellow}/>
         </div>
      
      <img  className='puzzelimg'  src={aboutimg2} />
      
     

         

    </div>
  )
}

export default About