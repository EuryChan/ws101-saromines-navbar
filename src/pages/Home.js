
import img from '../../src/pages/hom.png'; 
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';

export default function Home(){

  useEffect(() => {
    ScrollReveal().reveal('.your-element-class', {
     
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
    });
  }, []);

    return (
    <div className="homee"
      style={{
        position: 'relative',          
        width: '100%',
        minHeight: '100vh',
        backgroundImage: `url(${img})`,  
        backgroundSize: 'cover',         
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
    <div
        style={{
            color: 'white',                
            textAlign: 'center',
            zIndex: 1,                      
            paddingTop: '330px',            
            margin:0
        }}
      ></div>
        <h1 className="your-element-class">WELCOME TO MY SAFE SPACE</h1>
        <button className="button">CLICK FOR MORE</button>
      </div>
    )
}