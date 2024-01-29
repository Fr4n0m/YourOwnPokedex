import React from "react";
import Image from "next/image";
import getPokemonTypes from "@/api/pokemonFetch";

function PokemonTypeIcon({ pokemonType }) {
  const types = getPokemonTypes;

  const iconPath = () => {
    if (types.includes(pokemonType)) {
      return `/public/assets/icons/pokemon_type_icons/type_icon_${pokemonType}.png`;
    }

    return (
      <div>
        <Image
          src={iconPath}
          alt={pokemonType}
          width={50}
          height={50}
          layout="responsive"
        />
      </div>
    );
  };
}

export default PokemonTypeIcon;
