import React from "react";
import "../styles/cocktailDisplayStyles/cocktailDisplayStyles.css";
import { Link } from "react-router-dom";

function CocktailDisplay({ cocktail, selectSingleCocktail }) {
  return (
    <>
      <div className="cocktailDisplayContainer">
        <img
          src={cocktail?.strDrinkThumb}
          alt={cocktail?.strDrink}
          width="370px"
          height="310px"
        />
        <div className="cocktailDetails">
          <h2>{cocktail?.strDrink}</h2>
          <h3 id="shotGlass">{cocktail?.strGlass}</h3>
          <p id="cocktailCat">{cocktail?.strCategory}</p>
          <Link to="/singleCocktail">
            <button onClick={() => selectSingleCocktail(cocktail?.idDrink)}>
              Details
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default CocktailDisplay;
