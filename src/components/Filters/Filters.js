import React, { useState } from "react";
import "./Filters.css";

function Filters({ charactersFound }) {
  const [nameToggle, setNameToggle] = useState(false);

  return (
    <div className="filter-bar">
      <span>Encontrados {charactersFound} Heróis</span>
      <img src="assets/ic_heroi.svg" alt="Icone heroi" />
      <span>Ordenar por nome - A/Z</span>
      <img
        className="pointer-click"
        alt="Ordenar por nome"
        onClick={() => setNameToggle((current) => !current)}
        src={`assets/${nameToggle ? "toggle_off.svg" : "toggle_on.svg"}`}
      />

      <img src="assets/favorito_01.svg" alt="Icone de favoritos" />
      <p>Somente favoritos</p>
    </div>
  );
}

export default Filters;
