import { useQuery } from "react-query";
import { api } from "config/api";

const getCharacter = async ({ queryKey }) => {
  const [, { characterId }] = queryKey;

  return api.get(`/characters/${characterId}`, {
    params: {
      ts: process.env.REACT_APP_TIMESTAMP,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
    },
  });
};

/**
 * Busca os detalhes de um personagem
 *
 * @param {String} characterId ID do personagem
 * @returns {Array} Resultado da API
 */
export default function useCharacter({ characterId }) {
  return useQuery(["character", { characterId }], getCharacter, {
    select: ({ data }) => {
      const { results } = data.data;
      return results[0];
    },
  });
}
