import React from "react";
import PokemonCard from "../components/PokemonCardComponent";

const PokemonList = ({ pokemonList }) => {
  return (
    <div className="flex justify-center items-center m-[100px] mt-[60px] rounded-xl">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 max-w-[100%] gap-5 sm:gap-10 md:gap-10 lg:gap-10 xl:gap-10">
        {pokemonList.map((pokemon, index) => (
          <PokemonCard key={pokemon.id} pokemonId={pokemon.id} index={index} />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
