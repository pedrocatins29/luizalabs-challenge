import { useQuery } from "react-query";
import { api } from "config/api";
import { useContext } from "react";
import { FavoriteCharactersContext } from "context/FavoriteCharactersProvider";

const getCharacter = async ({ queryKey }) => {
  const [, params] = queryKey;

  return api.get(`/characters`, {
    params: {
      ts: process.env.REACT_APP_TIMESTAMP,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
      ...params,
    },
  });
};

const useCharacters = ({ limit, filter, toggleFilter }) => {
  const { favorites } = useContext(FavoriteCharactersContext);

  return useQuery(["characters", { limit }], getCharacter, {
    select: ({ data }) => {
      const { results } = data.data;

      const filteredCharacters = results.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );

      if (toggleFilter) {
        const favoritedCharacters = filteredCharacters.filter((character) =>
          favorites.includes(character.id)
        );

        return favoritedCharacters;
      }

      const sortedCharacters = filteredCharacters.sort((a, b) =>
        a.name.localeCompare(b.name)
      );

      return sortedCharacters;
    },
  });
};

export default useCharacters;
