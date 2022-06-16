import useStickyState from "hooks/useStickyState";
import { createContext, React } from "react";

const FavoriteCharactersContext = createContext();

function FavoriteCharactersProvider({ children }) {
  const [favorites, setFavorites] = useStickyState([], "favorites");

  return (
    <FavoriteCharactersContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoriteCharactersContext.Provider>
  );
}

export { FavoriteCharactersProvider, FavoriteCharactersContext };
