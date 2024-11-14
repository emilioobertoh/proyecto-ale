import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './customcarousel.css';

function CustomCarousel({ images, interval = 7000 }) {
  const [imagesPerSlide, setImagesPerSlide] = useState(2);

  useEffect(() => {
    const updateImagesPerSlide = () => {
      setImagesPerSlide(window.innerWidth < 768 ? 1 : 2);
    };

    updateImagesPerSlide();
    window.addEventListener('resize', updateImagesPerSlide);

    return () => window.removeEventListener('resize', updateImagesPerSlide);
  }, []);

  const chunkedImages = [];
  for (let i = 0; i < images.length; i += imagesPerSlide) {
    chunkedImages.push(images.slice(i, i + imagesPerSlide));
  }

  return (
    <div>
      <Carousel interval={interval} indicators={false}>
        {chunkedImages.map((imageGroup, index) => (
          <Carousel.Item key={index}>
            <div className="row align-items-center justify-space-between">
              {imageGroup.map((image, imgIndex) => (
                <div className={`col-12 col-md-${12 / imagesPerSlide} px-4`} key={imgIndex}>
                  <img src={image} className="cc-images d-block w-100" alt={`carousel-${index}-${imgIndex}`} />
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export { CustomCarousel };
