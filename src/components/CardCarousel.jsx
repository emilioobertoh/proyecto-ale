import React, { useState, useEffect } from 'react';
import { Carousel, Card } from 'react-bootstrap';
import './cardcarousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function CardCarousel({ cards, interval = 7000 }) {
  const [cardsPerSlide, setCardsPerSlide] = useState(3);

  useEffect(() => {
    const updateCardsPerSlide = () => {
      setCardsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };

    updateCardsPerSlide();
    window.addEventListener('resize', updateCardsPerSlide);

    return () => window.removeEventListener('resize', updateCardsPerSlide);
  }, []);

  // Create groups of cards based on the cardsPerSlide state
  const groupedCards = [];
  for (let i = 0; i < cards.length; i += cardsPerSlide) {
    groupedCards.push(cards.slice(i, i + cardsPerSlide));
  }

  return (
    <div>
      <Carousel interval={interval} indicators={false}>
        {groupedCards.map((cardGroup, index) => (
          <Carousel.Item key={index}>
            <div className="row align-items-center justify-content-center">
              {cardGroup.map((card, cardIndex) => (
                <div className={`col-12 col-md-${12 / cardsPerSlide} px-4`} key={cardIndex}>
                  <Card className="align-items-center bg-dark text-white cards-carousel" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={card.imgSrc} alt={card.title} />
                    <Card.Body className="text-center">
                      <Card.Title className="mt-3 review-title">{card.title}</Card.Title>
                      <div className="card-date">{card.date}</div>
                      <div className="rating my-2">
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                        <FontAwesomeIcon icon="fa-star" />
                      </div>
                      <Card.Text>{card.text}</Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export { CardCarousel };
