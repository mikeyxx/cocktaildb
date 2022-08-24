import { useCallback, useEffect } from "react";
import { useState } from "react";
import Navbar from "./component/Navbar";
import SingleCocktail from "./component/SingleCocktail";
import "./styles/App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Display from "./component/Display";

function App() {
  const [cocktails, setCocktails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");
  const [singleCocktail, setSingleCocktail] = useState(null);

  const API_URL = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=";

  const fetchCocktail = useCallback(async () => {
    try {
      const response = await fetch(`${API_URL}${search}`);
      if (!response.ok) throw Error("We don't have this cocktail");
      const data = await response.json();
      setCocktails(data.drinks);
      setError(null);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [search]);

  useEffect(() => {
    fetchCocktail();
  }, [fetchCocktail]);

  const selectSingleCocktail = (id) => {
    const selectedCocktail = cocktails.find(
      (cocktail) => cocktail.idDrink === id
    );
    setSingleCocktail(selectedCocktail);
  };

  // console.log(cocktails);

  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <Display
                loading={loading}
                error={error}
                search={search}
                setSearch={setSearch}
                cocktails={cocktails}
                selectSingleCocktail={selectSingleCocktail}
              />
            }
          />

          <Route
            path="/singleCocktail"
            exact
            element={
              <SingleCocktail
                singleCocktail={singleCocktail}
                loading={loading}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
