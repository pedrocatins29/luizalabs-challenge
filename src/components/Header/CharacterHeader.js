import SearchBar from "components/SearchBar/SearchBar";
import React from "react";
import { Link } from "react-router-dom";

function CharacterHeader() {
  return (
    <div className="character-header d-flex">
      <Link to="/">
        <img alt="Marvel Logo" src="/assets/logo_menor.svg" />
      </Link>
      <SearchBar variant={false} />
    </div>
  );
}

export default CharacterHeader;
