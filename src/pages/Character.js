import React from "react";
import { useParams } from "react-router-dom";
import useCharacter from "hooks/useCharacter";
import CharacterHeader from "components/Header/CharacterHeader";

function Character() {
  // let { id } = useParams();

  // const { isLoading, isError, data, error } = useCharacter({ characterId: id });

  // if (isLoading) {
  //   return <span>Loading...</span>;
  // }

  // if (isError) {
  //   return <span>Error: {error.message}</span>;
  // }

  return (
    <div>
      <CharacterHeader />
    </div>
  );
}

export default Character;
