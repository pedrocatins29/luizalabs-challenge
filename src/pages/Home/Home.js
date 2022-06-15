import Filters from "components/Filters/Filters";
import Header from "components/Header/Header";
import ListCharacter from "components/Character/ListCharacter";
import SearchBar from "components/SearchBar/SearchBar";
import useCharacters from "hooks/useCharacters";
import "./Home.css";

function Home() {
  const { isLoading, isError, data, error } = useCharacters({ limit: 20 });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { data: characters } = data.data;

  return (
    <>
      <Header />
      <SearchBar />
      <div>
        <Filters charactersFound={characters.count} />
        <ListCharacter characterData={characters.results} />
      </div>
    </>
  );
}

export default Home;
