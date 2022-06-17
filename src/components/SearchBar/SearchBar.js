import { SearchBarContext } from "context/SearchBarProvider";
import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./SearchBar.css";

function SearchBar({ variant }) {
  const { setSearchBarValue, searchBarValue } = useContext(SearchBarContext);
  const [inputText, setInputText] = useState(() => {
    return searchBarValue !== null ? searchBarValue : "";
  });

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { value } = e.target;
    const lowerCase = value.toLowerCase();
    setInputText(lowerCase);
  };

  useEffect(() => {
    if (pathname !== "/" && searchBarValue !== "") {
      navigate("/");
    }
  }, [searchBarValue, navigate, pathname]);

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      setSearchBarValue(inputText);
    }, 1000);

    return () => clearTimeout(delayDebounceFn);
  }, [setSearchBarValue, inputText]);

  return (
    <div className={variant ? "search" : "search-white"}>
      <img
        className="search-icon"
        src="/assets/ic_busca.svg"
        alt="Icone de busca"
      />
      <input
        onChange={inputHandler}
        value={inputText}
        type="text"
        placeholder="Procure por heróis"
        id="searchTerm"
      ></input>
    </div>
  );
}

export default SearchBar;
