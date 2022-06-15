import CharacterCard from "components/CharacterCard/CharacterCard";
import Header from "components/Header/Header";
import SearchBar from "components/SearchBar/SearchBar";
import useCharacters from "hooks/useCharacters";

function Home() {
  const { isLoading, isError, data, error } = useCharacters();

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  const { results } = data.data.data;

  return (
    <>
      <Header />
      <SearchBar />
      <div>
        <span>Encontrados 20 Heróis</span>
        <span>Ordenar por nome - A/Z</span>
        {/* toggle */}
        {results.map((item) => {
          return (
            <CharacterCard
              name={item.name}
              favorited={false}
              key={item.id}
              thumbnail={item.thumbnail}
            />
          );
        })}
      </div>
    </>
  );
}

export default Home;
