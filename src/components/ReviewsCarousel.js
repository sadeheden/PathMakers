import React, { useEffect, useRef, useState } from "react";

const ReviewsCarousel = () => {
  const reviewsContainer = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = [
    // Add your review data here as objects
  ];

  const scrollToCard = (index) => {
    const cardWidth = reviewsContainer.current.firstChild.offsetWidth + 20; // Card width + margin
    reviewsContainer.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
      scrollToCard(currentIndex);
    }, 30000); // Auto-scroll every 30 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, [currentIndex, reviews.length]);

  return null; // Add JSX to connect arrow navigation
};
