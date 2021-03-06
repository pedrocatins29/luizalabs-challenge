import React from "react";
import Home from "./pages/Home";
import Character from "pages/Character";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SearchBarProvider } from "context/SearchBarProvider";
import { FavoriteCharactersProvider } from "context/FavoriteCharactersProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SearchBarProvider>
        <FavoriteCharactersProvider>
          <Router>
            <Routes>
              <Route path="/character/:id" element={<Character />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </FavoriteCharactersProvider>
      </SearchBarProvider>
    </QueryClientProvider>
  );
}

export default App;
