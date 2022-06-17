import React from "react";

function StarRating({ rating }) {
  return (
    <div className="star-rating">
      {[...Array(5)].map((_, index) => {
        if (index <= rating - 1) {
          return (
            <img
              key={index}
              src="/assets/avaliacao_on.svg"
              alt="Estrela vermelha"
            />
          );
        }

        return (
          <img
            key={index}
            src="/assets/avaliacao_off.svg"
            alt="Estrela cinza"
          />
        );
      })}
    </div>
  );
}

export default StarRating;
