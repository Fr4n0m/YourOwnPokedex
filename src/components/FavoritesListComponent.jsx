import React from "react";
import PokemonList from "./PokemonListComponent";

const FavoritesList = ({ favorites, setFavorites }) => {
  return (
    <>
      <div
        id="favorites-section"
        className="animate__animated animate__fadeInUp animate__delay-3s p-10"
      >
        <h1 className="animate__animated animate__fadeInLeft ml-[10%] text-shadow-lg shadow-[black] text-4xl sm:text-5xl md:text-6xl font-extrabold text-[yellow]">
          FAVORITES
        </h1>
      </div>

      <PokemonList
        pokemonList={favorites}
        favorites={favorites}
        setFavs={setFavorites}
      />
    </>
  );
};

export default FavoritesList;
