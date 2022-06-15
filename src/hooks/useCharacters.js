import { useQuery } from "react-query";
import { api } from "config/api";

const getCharacter = async ({ queryKey }) => {
  const [, { limit }] = queryKey;

  return api.get(`/characters`, {
    params: {
      ts: 100,
      apikey: process.env.REACT_APP_MARVEL_API_PUBLIC_KEY,
      hash: process.env.REACT_APP_MARVEL_API_HASH,
      limit,
    },
  });
};

export default function useCharacters({ limit }) {
  return useQuery(["characters", { limit }], getCharacter);
}
