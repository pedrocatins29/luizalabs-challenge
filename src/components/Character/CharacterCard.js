import React, { useContext } from "react";
import "./CharacterCard.css";
import { Link } from "react-router-dom";
import { SearchBarContext } from "context/SearchBarProvider";

function CharacterCard({
  name,
  thumbnail,
  favorited,
  characterId,
  toggleFavorite,
}) {
  const imagePath = `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;
  const { setSearchBarValue } = useContext(SearchBarContext);
  return (
    <li>
      <Link
        onClick={() => setSearchBarValue("")}
        to={`/character/${characterId}`}
      >
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
        <p className="bold-text">{name}</p>
        <img
          onClick={() => toggleFavorite({ characterId })}
          alt="Favorito"
          className="pointer-click"
          src={favorited ? "assets/favorito_01.svg" : "assets/favorito_02.svg"}
        />
      </div>
    </li>
  );
}

export default CharacterCard;
