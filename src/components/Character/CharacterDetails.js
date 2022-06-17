import StarRating from "components/StarRating/StarRating";
import React from "react";
import "./CharacterDetails.css";
import useFavorite from "hooks/useFavourite";

function CharacterDetails({ character, lastRelease }) {
  const { name, description, comics, series, thumbnail, id } = character;
  const { toggleFavorite, favorites } = useFavorite();

  const isFavorited = favorites?.includes(id);
  return (
    <div className="d-flex main-content">
      <div className="d-flex details-container">
        <div className="d-flex characters-name">
          <h1>{name}</h1>
          <img
            onClick={() => toggleFavorite({ characterId: id })}
            alt="Heroi Favoritado"
            className="pointer-click"
            src={
              isFavorited
                ? "/assets/favorito_01.svg"
                : "/assets/favorito_02.svg"
            }
          />
        </div>

        <p style={{ color: "#939393" }}>
          {description || "Esse personagem não possui descrição"}
        </p>

        <div className="d-flex info-row">
          <div>
            <p className="bold-text">Quadrinhos</p>
            <span className="d-flex">
              <img alt="Quadrinhos" src="/assets/ic_quadrinhos.svg" />
              <p className="available-text">{comics.available}</p>
            </span>
          </div>
          <div>
            <p className="bold-text">Filmes</p>
            <span className="d-flex">
              <img alt="Filmes" src="/assets/ic_trailer.svg" />
              <p className="available-text">{series.available}</p>
            </span>
          </div>
        </div>

        <div className="d-flex rating">
          <p className="bold-text">Rating:</p>
          {/* /Não consegui achar o rating o heroi na API */}
          <StarRating rating={4} />
        </div>

        <p className="bold-text">Último quadrinho: {lastRelease}</p>
      </div>
      <div className="image-container">
        <img
          alt="Foto do Heroi"
          src={`${thumbnail.path}.${thumbnail.extension}`}
        />
      </div>
    </div>
  );
}

export default CharacterDetails;
