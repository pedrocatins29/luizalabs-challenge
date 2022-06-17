import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "hooks/useCharacter";
import CharacterHeader from "components/Header/CharacterHeader";
import CharacterDetails from "components/Character/CharacterDetails";
import useComics from "hooks/useComics";
import LatestComics from "components/LatestComics/LatestComics";

function Character() {
  let { id } = useParams();

  const { isLoading, isError, data, error } = useCharacter({ characterId: id });

  const {
    isLoading: isLoadingComics,
    isError: isErrorComics,
    data: comicsData,
    error: comicsError,
  } = useComics({ characterId: id, orderBy: "onsaleDate", limit: 10 });

  if (isLoading || isLoadingComics) {
    return <span>Loading...</span>;
  }

  if (isError || isErrorComics) {
    return <span>Error: {error.message || comicsError.message}</span>;
  }

  return (
    <div className="container">
      <CharacterHeader />
      <CharacterDetails character={data} />
      <LatestComics comics={comicsData} />
    </div>
  );
}

export default Character;
