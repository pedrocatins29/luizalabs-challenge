import { SearchBarContext } from "context/SearchBarProvider";
import React, { useContext, useEffect, useState } from "react";
import "./SearchBar.css";

function SearchBar() {
  const [inputText, setInputText] = useState("");
  const { setSearchBarValue } = useContext(SearchBarContext);

  const inputHandler = (e) => {
    const { value } = e.target;
    const lowerCase = value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchBarValue(inputText);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [setSearchBarValue, inputText]);

  return (
    <div className="search">
      <img
        className="search-icon"
        src="assets/ic_busca.svg"
        alt="Icone de busca"
      />
      <input
        onChange={inputHandler}
        type="text"
        placeholder="Procure por heróis"
        id="searchTerm"
      ></input>
    </div>
  );
}

export default SearchBar;
