import arrowRight from '../../assets/arrowRight.svg'
import arrowLeft from '../../assets/arrowLeft.svg'
import '../../style/logements.scss';
import React, { useState } from 'react';

function LogementCarrousel({ title, pictures }) {

    const [CurrentImage, setCurrentImage] = useState(0)
    const PreviewImage = () => {
  
      setCurrentImage((prevIndex) => (prevIndex === 0 ? pictures.length - 1 : prevIndex - 1));
    };
  
    const NextImage = () => {
      setCurrentImage((prevIndex) => (prevIndex === pictures.length - 1 ? 0 : prevIndex + 1));
    };

  
    return (
        <div>
          <div className='carrousel'>
            {pictures.length > 1 && ( 
              <>
                <button className='Arrow-left' onClick={PreviewImage}>
                  <img src={arrowLeft} alt="Previous" />
                </button>
                <button className='Arrow-right' onClick={NextImage}>
                  <img src={arrowRight} alt="Next" />
                </button>
                <p className='counterSlides'>{CurrentImage + 1}/{pictures.length}</p>
              </>
            )}
            <img className='carrouselImg' src={pictures[CurrentImage]} alt={title} />
          </div>
        </div>
      );
    }

export default LogementCarrousel