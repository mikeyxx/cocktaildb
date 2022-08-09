import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import "../styles/searchCompStyles/searchCompStyles.css";

function SearchCocktail({ search, setSearch }) {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <div className="searchContainer">
      <input
        ref={inputRef}
        value={search}
        type="search"
        placeholder="Search for your favourite cocktail"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchCocktail;
