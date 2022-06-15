import React from "react";
import "./CharacterCard.css";

function CharacterCard({ name, thumbnail, favorited }) {
  const imagePath = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;

  return (
    <li>
      <div className="red-line">
        <img
          className="character-image"
          src={imagePath}
          alt="Imagem do personagem"
        />
        <hr />
      </div>
      <p>{name}</p>
      {favorited}
    </li>
  );
}

export default CharacterCard;
