import StarRating from "components/StarRating/StarRating";
import React from "react";
import "./CharacterDetails.css";

function CharacterDetails({ character }) {
  const { name, description, comics, series, thumbnail } = character;
  return (
    <div className="d-flex main-content">
      <div className="d-flex details-container">
        <div className="d-flex characters-name">
          <h1>{name}</h1>
          <img
            onClick={() => {}}
            alt="Heroi Favoritado"
            //   src={favorited ? "assets/favorito_01.svg" : "assets/favorito_02.svg"}
            src="/assets/favorito_01.svg"
          />
        </div>

        <p>{description || "Esse personagem não possui descrição"}</p>

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
          <StarRating rating={4} />
        </div>

        <p className="bold-text">Último quadrinho: </p>
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
