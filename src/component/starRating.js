import React from "react";
import { FaStar } from "react-icons/fa";
import "../styles.css";

function StarRating({ rating }) {
  const ratingRounding = Math.round(rating);
  const arr = Array(5).fill(0);
  return (
    <div className="star-rating">
      {arr.map((star, index) => {
        return (
          <div key={index}>
            <FaStar color={index < ratingRounding ? "#FFFF00" : "#000000"} />
          </div>
        );
      })}
    </div>
  );
}

export default StarRating;
