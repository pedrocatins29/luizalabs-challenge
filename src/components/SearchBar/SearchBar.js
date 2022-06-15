import React from "react";
import "./SearchBar.css";

function SearchBar() {
  return (
    <div className="search-container">
      <div className="search-background">
        <img src="assets/ic_busca.svg" alt="Icone de busca" />
        <input
          type="text"
          placeholder="Procure pro heróis"
          id="homeSearch"
        ></input>
      </div>
    </div>
  );
}

export default SearchBar;
