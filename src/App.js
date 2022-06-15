import React, { useState } from "react";
import SearchBarContext from "context/SearchBarProvider";
import Home from "./pages/Home/Home";
import Character from "pages/Character";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();

function App() {
  const [searchBarValue, setSearchBarValue] = useState("");
  return (
    <SearchBarContext.Provider value={{ searchBarValue, setSearchBarValue }}>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Routes>
            <Route path="/character/:id" element={<Character />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </SearchBarContext.Provider>
  );
}

export default App;
