import React from "react";
import Image from "next/image";
import { getPokemons, getPokemonById } from "@/api/pokemonFetch";

function PokemonImageComponent({ pokemonId }) {
  const pokemon = getPokemonById(pokemonId);

  return (
    <div>
      <Image
        src={pokemon.url}
        alt={pokemon.name}
        width={24}
        height={24}
        layout="responsive"
      />
    </div>
  );
}

export default PokemonImageComponent;
