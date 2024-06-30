import React from "react";
import { ReviewsContainer } from "./styled-elements.js";

const Reviews = () => {
  return (
    <ReviewsContainer>
      <ul>
        {Array(300)
          .fill("")
          .map((_, i) => (
            <Review key={i} index={i} />
          ))}
      </ul>
    </ReviewsContainer>
  );
};

const Review = ({ index }) => {
  const init = performance.now();
  while (init > performance.now() - 3) {
    // Fake slow down.
  }
  return <li>Review #{index}</li>;
};

export default Reviews;
