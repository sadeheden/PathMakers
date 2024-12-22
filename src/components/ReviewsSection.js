import React, { useEffect, useState } from "react";
import "../styles/ReviewsSection.css";

const ReviewsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "John Doe",
      stars: 5,
      review: "Great service! Highly recommend it.",
      img: "https://i.pinimg.com/736x/97/17/36/971736f6800317e398b744539df66d8f.jpg",
    },
    {
      name: "Jane Smith",
      stars: 4,
      review: "The product was good but shipping was slow.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlOZuBmbKF_aQbTXsa3GBu-bucYkYA5YmxVg&s",
    },
    {
      name: "Mike Johnson",
      stars: 5,
      review: "Excellent experience! Will buy again.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQImF53hRlvY_zpKeWxg5az74EVNN_v_oxzWA&s",
    },
    {
      name: "Emily Davis",
      stars: 4,
      review: "Good quality but a bit pricey.",
      img: "https://i0.wp.com/explore.zoombangla.com/wp-content/uploads/2023/01/202012220842-main.cropped_1608601380.jpg?resize=788%2C443&ssl=1",
    },
    {
      name: "Chris Lee",
      stars: 5,
      review: "Outstanding customer service!",
      img: "https://media.istockphoto.com/id/1403319839/photo/happy-man-taking-selfie-using-mobile-phone-at-beach-on-outdoor.jpg?s=612x612&w=0&k=20&c=EQpq_T7dt39Zde1lb5ssBlusdR6GAEsORNQhqVIljVo=",
    },
    {
      name: "Sarah Brown",
      stars: 4,
      review: "Happy with the purchase overall.",
      img: "https://i.pinimg.com/736x/ba/5a/63/ba5a63ed76475e8d1ad9204620cef2c9.jpg",
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
