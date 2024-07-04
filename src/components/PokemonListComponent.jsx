import React from "react";
import PokemonCard from "../components/PokemonCardComponent";

const PokemonList = ({ pokemonList, favorites, setFavs }) => {
  const onClickListener = (pokemon) => {
    let updatedFavorites;

    if (!favorites.some((favPokemon) => favPokemon.id === pokemon.id)) {
      updatedFavorites = [...favorites, pokemon];
      console.log("add to fav: " + pokemon.name);
    } else {
      updatedFavorites = favorites.filter(
        (favPokemon) => favPokemon.id !== pokemon.id
      );
      console.log("remove from fav: " + pokemon.name);
    }

    console.log(updatedFavorites);
    setFavs(updatedFavorites);
  };

  return (
    <div className="flex justify-center items-center m-[100px] mt-[60px] rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[100%] gap-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard
            key={pokemon.id}
            pokemonId={pokemon.id}
            index={index}
            setFav={() => onClickListener(pokemon)}
            favorites={favorites}
            isFavorite={favorites.some(
              (favPokemon) => favPokemon.id === pokemon.id
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
