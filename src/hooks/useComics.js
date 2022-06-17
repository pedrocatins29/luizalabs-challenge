import { useQuery } from "react-query";
import { api } from "config/api";

const getComicsFromCharacter = async ({ queryKey }) => {
  const [, { characterId, orderBy, limit }] = queryKey;

  return api.get(`/characters/${characterId}/comics`, {
    params: {
      ts: process.env.REACT_APP_TIMESTAMP,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
      orderBy,
      limit,
    },
  });
};

/**
 * Busca os detalhes de um quadrinho
 *
 * @param {*} characterId ID do personagem
 * @param {*} orderBy Filtro de ordenação
 * @param {*} limit Limite de resultados
 * @returns {Array} Resultado da API
 */
function useComics({ characterId, orderBy, limit }) {
  return useQuery(
    ["comics", { characterId, orderBy, limit }],
    getComicsFromCharacter,
    {
      select: ({ data }) => {
        const { results } = data.data;
        return results;
      },
    }
  );
}

export default useComics;
