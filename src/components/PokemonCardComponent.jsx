"use client";

import { getPokemonById } from "@/api/pokemonFetch";
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

const PokemonCard = ({ pokemonId, index, setFav, isFavorite }) => {
  const pokemon = getPokemonById(pokemonId);

  //useState para saber si se está haciendo hover con el ratón, para saber los favoritos
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

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
    if (isFavorite) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }

    setFav();
  };

  //Definicion de colorClass para cambiar el color de la card depende del tipo de pokemon, hace uso de la función definida arriba
  const pokemonType = pokemon.type[0];
  const colorClass = getTypeColorClass(pokemonType);
  const hoverColorClass = getHoverTypeColorClass(pokemonType);

  return (
    <div
      className={`animate__animated animate__fadeInUp shadow-lg shadow-[#00000093] hover:shadow-2xl hover:shadow-[#00000087] relative h-[376px] w-[225px] rounded-3xl border-[7px] transition-all duration-300 ease-in-out transform hover:border-[10px] ${
        isHovered ? hoverColorClass : colorClass
      }`}
      style={{ animationDelay: `${index * 0.2}s` }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="rounded-3xl shadow-inner p-6 transition-all">
        <Link href={`/pokemon/${pokemon.id}`}>
          <Image
            src={pokemon.url}
            alt={pokemon.name}
            width={50}
            height={50}
            layout="responsive"
            className={`animate__animated drop-shadow-lg ${
              isHovered ? "animate__pulse animate__infinite" : ""
            }`}
          />
        </Link>

        <div className="transition-all duration-300 pokemon-details flex flex-col justify-center items-center">
          <div>
            <div className="flex justify-center items-center gap-3">
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
                {pokemon.height} ft
              </div>
            )}
            {!isHovered && (
              <div className="m-2 transition-all duration-200 delay-100">
                <span className="font-bold">Weight: </span>
                {pokemon.weight} lbs
              </div>
            )}
          </div>

          {isHovered && (
            <div className="animate__animated animate__fadeInUp flex gap-4 mb-0 h-auto mt-[80px] justify-center items-center">
              <div>
                <IconButton
                  color={isFavorite ? "error" : hoverColorClass}
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
                    className={`text-sm h-[50px] w-[80px] font-bold ${hoverColorClass}`}
                  >
                    View Details
                  </Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PokemonCard;
