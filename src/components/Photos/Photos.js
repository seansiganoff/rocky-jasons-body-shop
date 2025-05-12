import React from 'react';
import './Photos.css';

const Photos = () => {



  return (
    <div className='photos-container'>
        <h2 className='photo-gallery-banner'>GALLERY</h2>
        
        <div className='project-container'>
          <h2>2024 Chevy Silverado</h2>
            <img className='project-img' alt='silverado' src={require('../../images/silverado_1.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_2.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_3.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_4.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_5.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_6.jpg')} />
            <img className='project-img' alt='silverado' src={require('../../images/silverado_7.jpg')} />
        </div>
        <hr />
        
          <div className='project-container' style={{backgroundColor: 'white'}}>
            <h2>2022 Toyota Corolla</h2>
            <img className='project-img' alt='corolla' src={require('../../images/toyota-01.jpg')} />
            <img className='project-img' alt='corolla' src={require('../../images/toyota-02.jpg')} />
            <img className='project-img' alt='corolla' src={require('../../images/toyota-03.jpg')} />
            <img className='project-img' alt='corolla' src={require('../../images/toyota-04.jpg')} />
        </div>
            
            
    </div>
  )
}

export default Photos