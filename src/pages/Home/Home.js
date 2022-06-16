import Filters from "components/Filters/Filters";
import Header from "components/Header/Header";
import ListCharacter from "components/Character/ListCharacter";
import SearchBar from "components/SearchBar/SearchBar";
import useCharacters from "hooks/useCharacters";
import { useContext, useState } from "react";
import "./Home.css";
import { SearchBarContext } from "context/SearchBarProvider";

function Home() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const { searchBarValue } = useContext(SearchBarContext);

  const { isLoading, isError, data, error } = useCharacters({
    limit: 20,
    filter: searchBarValue,
    toggleFilter,
  });
  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div>
      <Header />
      <SearchBar />
      <Filters
        charactersFound={data.length}
        setToggleFilter={setToggleFilter}
        toggleFilter={toggleFilter}
      />
      <ListCharacter characterData={data} />
      <div className="footer" />
    </div>
  );
}

export default Home;
