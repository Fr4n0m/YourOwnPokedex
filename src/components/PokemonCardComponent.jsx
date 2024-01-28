"use client";

import { getPokemonById } from "@/api/pokemonFetch";
import { Button, IconButton } from "@mui/material";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Link from "next/link";
import "animate.css/animate.min.css";
import {
  getTypeColorClass,
  getHoverTypeColorClass,
} from "@/utils/colorTypeClass";

const PokemonCard = ({ pokemonId, index }) => {
  const pokemon = getPokemonById(pokemonId);

  //useState para saber si se está haciendo hover con el ratón, para saber los favoritos
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

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
      setIsClicked(true);
      console.log("add to fav: " + pokemon.name);
    } else {
      updatedFavorites = favorites.filter(
        (favPokemon) => favPokemon.id !== pokemon.id
      );
      setIsClicked(false);
      console.log("remove from fav: " + pokemon.name);
    }

    console.log(updatedFavorites);
    setFavorites(updatedFavorites);
    saveFavoritesToLocalStorage(updatedFavorites);
  };

  const saveFavoritesToLocalStorage = (updatedFavorites) => {
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
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
          <h3 className="grid text-center font-bold uppercase mb-4">
            {pokemon.name}
          </h3>
          {!isHovered && (
            <div className="transition-all duration-200 delay-0">
              <span className="font-bold">Type: </span>
              {pokemon.type.join(", ")}
            </div>
          )}
          {!isHovered && (
            <div className="transition-all duration-200 delay-100">
              <span className="font-bold">Height: </span>
              {pokemon.height} m
            </div>
          )}
          {!isHovered && (
            <div className="transition-all duration-200 delay-500">
              <span className="font-bold">Weight: </span>
              {pokemon.weight} kg
            </div>
          )}
        </div>

        {isHovered && (
          <div className="flex gap-4 mb-0 h-auto mt-[30px]">
            <IconButton
              color={isClicked ? "error" : `${hoverColorClass}`}
              onClick={addToFavorites}
              variant="outlined"
              className="h-[40px]"
            >
              <FavoriteBorder />
            </IconButton>
            <Link href={`/pokemon/${pokemon.id}`}>
              <Button
                size="small"
                className={`text-sm h-[40px] font-bold p-2 ${hoverColorClass}`}
              >
                View Details
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default PokemonCard;
