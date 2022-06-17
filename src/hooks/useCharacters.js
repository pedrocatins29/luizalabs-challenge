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

/**
 * Busca os personagens e aplica os filtros escolhidos
 *
 * @param {boolean} toggleFilter Define se a lista é ordenada por nome ou por favoritos
 * @param {string} searchFilter Filtro de pesquisa
 * @param {number} limit Limite de resultados
 * @returns {Array} Resultado da API
 */
const useCharacters = ({ limit, searchFilter, toggleFilter }) => {
  const { favorites } = useContext(FavoriteCharactersContext);

  return useQuery(["characters", { limit, orderBy }], getCharacter, {
    select: ({ data }) => {
      const { results } = data.data;

      const filteredCharacters = results.filter(({ name }) =>
        name.toLowerCase().includes(searchFilter)
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
