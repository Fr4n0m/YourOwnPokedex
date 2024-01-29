"use client";

import {
  addToFavoritesPokemons,
  getFavoritesPokemons,
  getPokemonById,
  removeFavoritePokemon,
} from "@/api/pokemonFetch";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import "animate.css/animate.min.css";

//Función que devuelve estilos depende del tipo de pokemon
export const getTypeColorClass = (type) => {
  switch (type) {
    case "grass":
      return "bg-[#3fab85] border-[#1c4a3a] text-[#1c4a3a]";
    case "fire":
      return "bg-[#e57e43] border-orange-800 text-orange-800";
    case "water":
      return "bg-[#5a8ed3] border-blue-900 text-blue-900";
    case "bug":
      return "bg-[#b2f06c] border-[#698256] text-[#698256]";
    case "poison":
      return "bg-[#c8a0ef] border-[#5d4a70] text-[#5d4a70]";
    case "flying":
      return "bg-[#83baf0] border-[#415c7a] text-[#415c7a]";
    case "electric":
      return "bg-[#f3ca04] border-[#b19416] text-[#b19416]";
    case "ground":
      return "bg-[#cac48e] border-[#636047] text-[#636047]";
    case "fairy":
      return "bg-[#f7a7b8] border-[#bb5c72] text-[#bb5c72]";
    default:
      return "bg-gray-400 border-gray-600 text-gray-600";
  }
};

//Cuando se hace hover se cambian los colores
export const getHoverTypeColorClass = (type) => {
  switch (type) {
    case "grass":
      return "bg-[#205242] border-[#3fab86] text-[#3fab86]";
    case "fire":
      return "bg-[#7e4629] border-[#e57e43] text-[#e57e43]";
    case "water":
      return "bg-[#294161] border-[#5a8ed3] text-[#5a8ed3]";
    case "bug":
      return "bg-[#557536] border-[#b2f06c] text-[#b2f06c]";
    case "poison":
      return "bg-[#65517c] border-[#c8a0ef] text-[#c8a0ef]";
    case "flying":
      return "bg-[#456584] border-[#83baf0] text-[#83baf0]";
    case "electric":
      return "bg-[#897311] border-[#f3ca04] text-[#f3ca04]";
    case "ground":
      return "bg-[#636047] border-[#cac48e] text-[#cac48e]";
    case "fairy":
      return "bg-[#8b4554] border-[#f7a7b8] text-[#f7a7b8]";
    default:
      return "bg-gray-700 border-gray-400 text-gray-400";
  }
};

//Determina el icono que se va a colocar al lado del nombre
export const getTypeIcon = (type) => {
  switch (type) {
    case "grass":
      return "/assets/icons/pokemon_type_icons/type_icon_grass.svg";
    case "fire":
      return "/assets/icons/pokemon_type_icons/type_icon_fire.svg";
    case "water":
      return "/assets/icons/pokemon_type_icons/type_icon_water.svg";
    case "bug":
      return "/assets/icons/pokemon_type_icons/type_icon_bug.svg";
    case "poison":
      return "/assets/icons/pokemon_type_icons/type_icon_poison.svg";
    case "flying":
      return "/assets/icons/pokemon_type_icons/type_icon_flying.svg";
    case "electric":
      return "/assets/icons/pokemon_type_icons/type_icon_electric.svg";
    case "ground":
      return "/assets/icons/pokemon_type_icons/type_icon_ground.svg";
    case "fairy":
      return "/assets/icons/pokemon_type_icons/type_icon_fairy.svg";
    default:
      return "/assets/icons/pokemon_type_icons/type_icon_normal.svg";
  }
};

const PokemonCard = ({ pokemonId, index }) => {
  const pokemon = getPokemonById(pokemonId);

  //useState para saber si se está haciendo hover con el ratón, para saber los favoritos
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [favorites, setFavorites] = useState([]);

  //Define el State actual a true cuando se hace hover
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  //Define el State actual a false cuando se deja de hacer hover
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  //Añadir o eliminar un pokemon de favoritos
  const addToFavorites = () => {
    let updatedFavorites;
    if (!favorites.some((favPokemon) => favPokemon.id === pokemon.id)) {
      updatedFavorites = [...favorites, pokemon];
      addToFavoritesPokemons(pokemonId);
      setIsClicked(true);
      console.log("add to fav: " + pokemon.name);
    } else {
      updatedFavorites = favorites.filter(
        (favPokemon) => favPokemon.id !== pokemon.id
      );
      removeFavoritePokemon(pokemonId);
      setIsClicked(false);
      console.log("remove from fav: " + pokemon.name);
    }

    console.log(getFavoritesPokemons());
    setFavorites(updatedFavorites);
  };

  //Definicion de colorClass para cambiar el color de la card depende del tipo de pokemon, hace uso de la función definida arriba
  const colorClass = getTypeColorClass(pokemon.type[0]);
  const hoverColorClass = getHoverTypeColorClass(pokemon.type[0]);

  return (
    <div
      className={`animate__animated animate__fadeInUp relative h-[350px] w-[220px] p-8 rounded-3xl border-[5px] transition-all duration-300 ease-in-out transform hover:border-[10px] ${
        isHovered ? hoverColorClass : colorClass
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link href={`/pokemon/${pokemon.id}`}>
        <Image
          src={pokemon.url}
          alt={pokemon.name}
          width={50}
          height={50}
          layout="responsive"
        />
      </Link>

      <div className="transition-all duration-300 pokemon-details flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-3">
            <Image
              src={getTypeIcon(pokemon.type[0])}
              alt={pokemon.type}
              width={24}
              height={24}
              className="drop-shadow-md shadow-[black]"
            ></Image>
            <h3 className="grid text-center font-bold uppercase">
              {pokemon.name}
            </h3>
          </div>
          {!isHovered && (
            <div className="m-2 transition-all duration-200 delay-0">
              <span className="font-bold">Type: </span>
              {pokemon.type.join(", ")}
            </div>
          )}
          {!isHovered && (
            <div className="m-2 transition-all duration-200 delay-75">
              <span className="font-bold">Height: </span>
              {pokemon.height} m
            </div>
          )}
          {!isHovered && (
            <div className="m-2 transition-all duration-200 delay-100">
              <span className="font-bold">Weight: </span>
              {pokemon.weight} kg
            </div>
          )}
        </div>

        {isHovered && (
          <div className="animate__animated animate__fadeInUp flex gap-4 mb-0 h-auto mt-[60px]">
            <div>
              <IconButton
                color={isClicked ? "error" : `${hoverColorClass}`}
                onClick={addToFavorites}
                className="h-[40px]"
                variant="outlined"
              >
                <FavoriteBorder />
              </IconButton>
            </div>
            <div>
              <Link href={`/pokemon/${pokemon.id}`}>
                <Button
                  variant="normal"
                  size="small"
                  className={`text-sm h-[40px] font-bold p-2 ${hoverColorClass}`}
                >
                  View Details
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
