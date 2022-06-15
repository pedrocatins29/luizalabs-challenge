import React from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";

function CharacterCard({ name, thumbnail, favorited, characterId }) {
  const imagePath = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;

  return (
    <li>
      <Link to={`/character/${characterId}`}>
        <div className="red-line">
          <img
            className="character-image"
            src={imagePath}
            alt="Imagem do personagem"
          />
          <hr />
        </div>
      </Link>
      <div className="character-name">
        <p>{name}</p>
        <img
          onClick={() => console.log("favoritado id", characterId)}
          alt="Favorito"
          src={favorited ? "assets/favorito_01.svg" : "assets/favorito_02.svg"}
        />
      </div>
    </li>
  );
}

export default CharacterCard;