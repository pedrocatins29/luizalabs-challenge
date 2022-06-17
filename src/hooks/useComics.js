import { useQuery } from "react-query";
import { api } from "config/api";

const getComicsFromCharacter = async ({ queryKey }) => {
  const [, { characterId, orderBy, limit }] = queryKey;

  return api.get(`/characters/${characterId}/comics`, {
    params: {
      ts: 100,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
      orderBy,
      limit,
    },
  });
};

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
