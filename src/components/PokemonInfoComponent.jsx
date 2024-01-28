import React from "react";
import PokemonImage from "./PokemonImageComponent";
import { getPokemonById } from "@/api/pokemonFetch";
import {
  getTypeColorClass,
  getHoverTypeColorClass,
} from "@/utils/colorTypeClass";

const PokemonInfo = ({ pokemonId }) => {
  const pokemon = getPokemonById(pokemonId);

  const colorClass = getTypeColorClass(pokemon.type[0]);

  return (
    <>
      <div className="animate__animated animate__fadeInUp grid justify-center ml-[70px] mr-[70px]">
        <div
          className={`rounded-xl ${colorClass} flex border-[30px] justify-center max-w-[100%]`}
        >
          <PokemonImage pokemonId={pokemonId} />
          <div className="m-10 grid">
            <h1 className="text-2xl uppercase font-bold">
              {pokemon.name} #{pokemon.id}
            </h1>
            <hr className={`border-t-2 border-${colorClass} m-0`} />
            <ul className="text-xl">
              <li>
                <span className="font-bold">Height: </span>
                {pokemon.height} m
              </li>
              <hr className={`border-${colorClass} mt-4 mb-4`} />
              <li>
                <span className="font-bold">Weight: </span>
                {pokemon.weight} kg
              </li>
              <hr className={`border-${colorClass} mt-4 mb-4`} />
              <li>
                <span className="font-bold">Type: </span>
                {pokemon.type.join(", ")}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
