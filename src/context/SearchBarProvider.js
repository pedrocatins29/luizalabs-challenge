import { createContext, useState, React } from "react";

const SearchBarContext = createContext();

function SearchBarProvider({ children }) {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <SearchBarContext.Provider value={{ searchBarValue, setSearchBarValue }}>
      {children}
    </SearchBarContext.Provider>
  );
}

export { SearchBarProvider, SearchBarContext };
