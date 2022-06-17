import Filters from "components/Filters/Filters";
import Header from "components/Header/Header";
import ListCharacter from "components/Character/ListCharacter";
import SearchBar from "components/SearchBar/SearchBar";
import useCharacters from "hooks/useCharacters";
import { useContext, useState } from "react";
import { SearchBarContext } from "context/SearchBarProvider";
import Loading from "components/Loading/Loading";

function Home() {
  const [toggleFilter, setToggleFilter] = useState(false);
  const { searchBarValue } = useContext(SearchBarContext);

  const { isLoading, isError, data, error } = useCharacters({
    limit: 20,
    filter: searchBarValue,
    toggleFilter,
  });
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  return (
    <div className="container">
      <Header />
      <SearchBar variant={true} />
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
