import CharacterCard from "components/Character/CharacterCard";
import useFavorite from "hooks/useFavourite";
import React from "react";
import "./ListCharacter.css";

function ListCharacter({ characterData }) {
  const { toggleFavorite, favorites } = useFavorite();

  const characterList = characterData.map(({ id, name, thumbnail }) => {
    const isFavorited = favorites?.includes(id);
    return (
      <CharacterCard
        toggleFavorite={toggleFavorite}
        name={name}
        favorited={isFavorited}
        characterId={id}
        key={id}
        thumbnail={thumbnail}
      />
    );
  });

  return <ul className="caracter-list">{characterList}</ul>;
}

export default ListCharacter;
