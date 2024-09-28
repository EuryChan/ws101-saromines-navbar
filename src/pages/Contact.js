import img from '../../src/pages/hom.png'; 
import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';   

export default function Contact(){
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
                paddingTop: '40px',            
                margin:0
            }}
          ></div>
            <h1 className="your-element-class">Contact Us</h1>
            <div className='left-side'>
                <form>
                    <input type="text" name="Name" placeholder="Your Name" required />
                    <input type="text" name="Email" placeholder="Your Enail" required />
                    <input type="text" name="Message" placeholder="Your Message" required />
                    <button type="submit" className="Btn2">Submit</button>
                </form>
            </div>

            
        </div>
    )
}


