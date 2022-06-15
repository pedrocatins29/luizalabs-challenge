import { useQuery } from "react-query";
import { api } from "config/api";

const getCharacter = async ({ queryKey }) => {
  const [, params] = queryKey;

  return api.get(`/characters`, {
    params: {
      ts: 100,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
      ...params,
    },
  });
};

export default function useCharacters({ limit, filter, orderByName }) {
  return useQuery(["characters", { limit }], getCharacter, {
    select: ({ data }) => {
      const { results } = data.data;

      const filteredCharacters = results.filter(({ name }) =>
        name.toLowerCase().includes(filter)
      );

      if (orderByName) {
        const sortedCharacters = filteredCharacters.sort((a, b) =>
          a.name.localeCompare(b.name)
        );

        return sortedCharacters;
      }

      return filteredCharacters;
    },
  });
}
