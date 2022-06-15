import SearchBar from "components/SearchBar/SearchBar";
import React from "react";

function CharacterHeader() {
  return (
    <div className="container">
      <img alt="Marvel Logo" src="/assets/logo_menor.svg" />
      <SearchBar />
    </div>
  );
}

export default CharacterHeader;
