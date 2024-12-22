import React, { useEffect, useState } from "react";
import "../styles/ReviewsSection.css";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      stars: 5,
      review: "Great service! Highly recommend it.",
      img: "https://via.placeholder.com/50",
    },
    {
      name: "Jane Smith",
      stars: 4,
      review: "The product was good but shipping was slow.",
      img: "https://via.placeholder.com/50",
    },
    {
      name: "Mike Johnson",
      stars: 5,
      review: "Excellent experience! Will buy again.",
      img: "https://via.placeholder.com/50",
    },
    {
      name: "Emily Davis",
      stars: 4,
      review: "Good quality but a bit pricey.",
      img: "https://via.placeholder.com/50",
    },
    {
      name: "Chris Lee",
      stars: 5,
      review: "Outstanding customer service!",
      img: "https://via.placeholder.com/50",
    },
    {
      name: "Sarah Brown",
      stars: 4,
      review: "Happy with the purchase overall.",
      img: "https://via.placeholder.com/50",
    },
  ];

  const showReviews = () => {
    // Cycle through reviews in groups of three
    setCurrentIndex((prevIndex) => (prevIndex + 3) % reviews.length);
  };

  useEffect(() => {
    // Auto-advance every 20 seconds
    const interval = setInterval(showReviews, 20000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className="reviews-section">
      <h2>Customer Reviews</h2>
      <div className="reviews-container">
        {reviews.map((review, index) => {
          // Determine whether to show or hide the card
          const isVisible =
            index >= currentIndex && index < currentIndex + 3;
          return (
            <div
              key={index}
              className="review-card"
              style={{ display: isVisible ? "block" : "none" }}
            >
              <img src={review.img} alt={review.name} />
              <h3>{review.name}</h3>
              <p>⭐ {review.stars} stars</p>
              <p>
                {review.review} <a href="#">See more</a>
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ReviewsSection;
