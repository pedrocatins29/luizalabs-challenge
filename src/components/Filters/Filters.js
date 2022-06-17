import React from "react";
import "./Filters.css";

function Filters({ charactersFound, setToggleFilter, toggleFilter }) {
  return (
    <div className="filter-bar">
      <div>
        <p className="character-found">Encontrados {charactersFound} Heróis</p>
      </div>
      <div className="filters">
        <div>
          <img src="assets/ic_heroi.svg" alt="Icone heroi" />
          <p className={toggleFilter ? "grey" : "red"}>
            Ordenar por nome - A/Z
          </p>
          <img
            className="pointer-click"
            alt="Ordenar por nome"
            onClick={() => setToggleFilter((currentValue) => !currentValue)}
            src={`assets/${toggleFilter ? "toggle_on.svg" : "toggle_off.svg"}`}
          />
        </div>

        <div onClick={() => console.log("filtrar apenas os favoritos")}>
          <img src="assets/favorito_01.svg" alt="Icone de favoritos" />
          <p className={toggleFilter ? "red" : "grey"}>Somente favoritos</p>
        </div>
      </div>
    </div>
  );
}

export default Filters;
