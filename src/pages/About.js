import img from '../../src/pages/hom.png'; 
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';


export default function About(){


  useEffect(() => {
    ScrollReveal().reveal('.aboutt', {
     
      duration: 1000,
      distance: '50px',
      easing: 'ease-in-out',
      origin: 'left',
    });
  }, []);
  


    return (
        <div className="aboute"
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
                paddingTop: '300px',   
                margin:0
            }}
          ></div>
            <h1 className="aboutt">ABOUT ME</h1>
            <p className="abouts">I believe in creating a safe space where everyone feels <br/>comfortable sharing their thoughts and experiences.</p>
          </div>
        )
    }
        