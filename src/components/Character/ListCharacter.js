import CharacterCard from "components/Character/CharacterCard";
import React from "react";
import "./ListCharacter.css";

function ListCharacter({ characterData }) {
  const characterList = characterData.map((character) => (
    <CharacterCard
      name={character.name}
      favorited={false}
      characterId={character.id}
      key={character.id}
      thumbnail={character.thumbnail}
    />
  ));

  return <ul className="caracter-list">{characterList}</ul>;
}

export default ListCharacter;
