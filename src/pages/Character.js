import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "hooks/useCharacter";
import CharacterHeader from "components/Header/CharacterHeader";
import CharacterDetails from "components/Character/CharacterDetails";
import useComics from "hooks/useComics";
import LatestComics from "components/LatestComics/LatestComics";
import Loading from "components/Loading/Loading";
import useLastComicRelease from "hooks/useLastComicRelease";
import { useQuery } from "react-query";

function Character() {
  let { id } = useParams();

  const { isLoading, isError, data, error } = useCharacter({ characterId: id });

  const {
    isLoading: isLoadingComics,
    isError: isErrorComics,
    data: comicsData,
    error: comicsError,
  } = useComics({ characterId: id, orderBy: "-onsaleDate", limit: 10 });

  const lastComicDate = comicsData?.[0]?.dates?.[0].date;

  const getLastComicRelease = useQuery(
    ["lastComic", { lastComicDate }],
    useLastComicRelease,
    {
      enabled: !!lastComicDate,
    }
  );

  if (isLoading || isLoadingComics) {
    return <Loading />;
  }

  if (isError || isErrorComics) {
    return <span>Error: {error.message || comicsError.message}</span>;
  }

  return (
    <div className="container">
      <CharacterHeader />
      <CharacterDetails
        character={data}
        lastRelease={getLastComicRelease.data}
      />
      <LatestComics comics={comicsData} />
    </div>
  );
}

export default Character;
