import { FavoriteCharactersContext } from "context/FavoriteCharactersProvider";
import { useContext } from "react";

function useFavorite() {
  const { setFavorites, favorites } = useContext(FavoriteCharactersContext);

  const toggleFavorite = ({ characterId }) => {
    const meetsTheConditions = checkConditions(characterId);

    if (meetsTheConditions) {
      return setFavorites((favorite) => [characterId, ...favorite]);
    }

    return removeFavorite(characterId);
  };

  const checkConditions = (id) => {
    const isFavorited = favorites.find((item) => item === id);
    const moreThanFiveItens = favorites.length >= 5;

    if (isFavorited || moreThanFiveItens) {
      return false;
    }

    return true;
  };

  const removeFavorite = (id) => {
    const newFavorites = favorites.filter((favoriteId) => favoriteId !== id);
    setFavorites([...newFavorites]);
  };

  return { toggleFavorite, favorites };
}

export default useFavorite;
