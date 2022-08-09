import React from "react";
import CocktailDisplay from "./CocktailDisplay";
import Loading from "./Loading";
import SearchCocktail from "./SearchCocktail";

function Display({
  loading,
  search,
  setSearch,
  cocktails,
  selectSingleCocktail,
}) {
  return (
    <>
      <SearchCocktail search={search} setSearch={setSearch} />
      {loading ? (
        <Loading />
      ) : (
        <>
          {cocktails === null ? (
            <h1 className="header warning">We don't have this cocktail</h1>
          ) : (
            <h1 className="header">Cocktails</h1>
          )}
          <div className="displayDrinks">
            {cocktails?.map((cocktail) => (
              <CocktailDisplay
                key={cocktail?.idDrink}
                cocktail={cocktail}
                selectSingleCocktail={selectSingleCocktail}
                loading={loading}
              />
            ))}
          </div>
        </>
      )}
    </>
  );
}

export default Display;
