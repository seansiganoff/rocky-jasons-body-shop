import React from 'react'
import './home.css';
import About from '../About/About';
import FAQ from '../FAQ/FAQ';



// import { motion } from 'framer-motion';

const Home = () => {

  //Animates the vehicle icons when the page loads.
  // const visible = { opacity: 1, x: 0, transition: { duration: 0.4 } };
  //   const itemVariants = {
  //     hidden: { opacity: 0, x: -710 },
  //     visible
  //   };


  

  return (
    
    <div className='header'>
      <div className='header-overlay'>
        <img className="company-logo" src={require('../../images/rockys-bodyshop-2.jpg')} alt='Company Logo' />
        <div className="locations"><b className='theme-color'>ADDRESS:</b> 11504 Garland Rd #180, Dallas, TX, 75218.</div>
        <br />
        <div>
        
      </div>
      </div>
      {<About />}
      {<FAQ />}
      {/* {<Why />} */}
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26814.22483042033!2d-96.71832762568366!3d32.85112640000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864ea16200157ee5%3A0xbe4071a38bff7235!2sTrue%20Kings%20Auto%20Body!5e0!3m2!1sen!2sus!4v1746199416812!5m2!1sen!2sus" 
        width="100%" 
        height="650" 
        allowFullScreen="" 
        loading="lazy" 
        style={{ border: "0"}}
        referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
    
  )
}

export default Home