import React from "react";
import { Link } from "react-router-dom";
import "../styles/singleCocktail/singleCocktailStyle.css";

function SingleCocktail({ singleCocktail }) {
  return (
    <div className="singleCocktailContainer">
      {singleCocktail ? (
        <>
          <Link to="/">
            <div className="homeBtn">
              <button>Back home</button>
            </div>
          </Link>
          <h1 className="header">{singleCocktail?.strDrink}</h1>
          <div className="singleCocktailWrap">
            <img
              src={singleCocktail?.strDrinkThumb}
              alt={singleCocktail?.strDrink}
              width="370px"
              height="350px"
            />
            <div className="cocktailDetails">
              <p>
                <strong id="description">Name:</strong>{" "}
                {singleCocktail?.strDrink}
              </p>
              <p>
                <strong id="description">Category:</strong>{" "}
                {singleCocktail?.strCategory}
              </p>
              <p>
                <strong id="description">Info:</strong>{" "}
                {singleCocktail?.strAlcoholic}
              </p>
              <p>
                <strong id="description">Glass:</strong>{" "}
                {singleCocktail?.strGlass}
              </p>
              <p>
                <strong id="description">Instruction:</strong>{" "}
                {singleCocktail?.strInstructions}
              </p>
              <p>
                <strong id="description">Ingredient:</strong>{" "}
                {singleCocktail?.strIngredient1},{" "}
                {singleCocktail?.strIngredient2},{" "}
                {singleCocktail?.strIngredient3}
              </p>
            </div>
          </div>
        </>
      ) : (
        <p className="status">No cocktail selected</p>
      )}
    </div>
  );
}

export default SingleCocktail;
