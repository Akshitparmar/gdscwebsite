import React from "react";
import "../styles/gallery.css";
import image1 from "../assets/Gallery/image1.jpg";
import image2 from "../assets/Gallery/image2.jpg";
import image3 from "../assets/Gallery/image3.jpg";
import image4 from "../assets/Gallery/image4.jpg";
import image5 from "../assets/Gallery/image5.jpg";
import image6 from "../assets/Gallery/image6.jpg";
import image7 from "../assets/Gallery/image7.jpg";
import image8 from "../assets/Gallery/image8.jpg";
import image9 from "../assets/Gallery/image9.jpg";
import image10 from "../assets/Gallery/image10.jpg";



function Gallery() {
    return (
        <div className="gallerybody">
            <h1 className="heading">Gallery</h1>
            <div className="image-cards-wrapper">
                <img src={image1}/>
                <img src={image2}/>
                <img src={image3}/>
                <img src={image4}/>
                <img src={image5}/>
                <img src={image6}/>
                <img src={image7}/>
                <img src={image8}/>
                <img src={image9}/>
                <img src={image10}/>
            </div>
          
        </div>
    )
}


export default Gallery;