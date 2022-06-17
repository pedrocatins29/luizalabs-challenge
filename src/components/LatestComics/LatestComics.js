import ComicsCard from "components/Comics/ComicsCard";
import React from "react";
import "./LatestComics.css";

function LatestComics({ comics }) {
  return (
    <div>
      <h2>Últimos Lançamentos</h2>
      <ul className="comics-list">
        {comics.map((comic) => {
          return (
            <ComicsCard
              key={comic.id}
              title={comic.title}
              image={comic.thumbnail}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default LatestComics;
