import React, { useState } from "react";
import PokemonImage from "./PokemonImageComponent";
import {
  getPokemonById,
  modifyName,
  deletePokemonById,
  getPokemons,
} from "@/api/pokemonFetch";
import {
  getTypeColorClass,
  getTypeIcon,
} from "@/components/PokemonCardComponent";
import Image from "next/image";
import { Button } from "@mui/material";

const PokemonInfo = ({ pokemonId }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState("");

  const pokemon = getPokemonById(pokemonId);

  const colorClass = getTypeColorClass(pokemon.type[0]);
  const typeIcon = getTypeIcon(pokemon.type[0]);

  const handleEditClick = () => {
    setIsEditing(true);
    setNewName(pokemon.name);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
  };

  const handleSaveEdit = () => {
    modifyName(pokemonId, newName);
    setIsEditing(false);
  };

  const handleDeleteClick = (pokemonId) => {
    if (window.confirm(`Are you sure you want to delete ${pokemon.name}?`)) {
      deletePokemonById(pokemonId);
      window.location.href = "/";
      console.log("Deleted", pokemonId);
    }
  };

  return (
    <>
      <div className="animate__animated animate__fadeInUp grid justify-center items-center">
        <div
          className={`rounded-xl ${colorClass} grid justify-center items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 border-[30px] max-w-[100%] p-2`}
        >
          <div className="m-3 grid justify-center gap-4">
            <div className="animate__animated animate__bounceInDown w-[150px] h-[80px] sm:w-[200px] sm:h-[auto] md:w-[300px] md:h-[auto]">
              <PokemonImage pokemonId={pokemonId} />
            </div>

            {isEditing && (
              <div className="grid justify-center gap-4 mt-[-40px]">
                <input
                  type="text"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className={
                    "animate__animated animate__bounceInDown rounded-md focus:border-[#9a0000] focus:outline"
                  }
                />
                <div className="flex justify-center">
                  {" "}
                  <Button variant="normal" onClick={handleSaveEdit}>
                    Save
                  </Button>
                  <Button variant="normal" onClick={handleCancelEdit}>
                    Cancel
                  </Button>
                </div>
              </div>
            )}

            {!isEditing && (
              <div className="flex justify-center">
                <Button variant="normal" onClick={handleEditClick}>
                  Edit
                </Button>
                <Button variant="normal" onClick={handleDeleteClick}>
                  Delete
                </Button>
              </div>
            )}
          </div>

          <div className="m-10 grid">
            <div className="mb-10">
              <span className="animate__animated animate__lightSpeedInRight text-2xl uppercase font-bold flex flex-row justify-center gap-5 m-3">
                <Image
                  src={typeIcon}
                  alt={pokemon.type}
                  width={24}
                  height={24}
                  className="drop-shadow-md shadow-[black]"
                ></Image>
                <h1>{pokemon.name}</h1>
                <p>#{pokemon.id}</p>
              </span>
              <hr
                className={`animate__animated animate__lightSpeedInRight border-t-2 border-${colorClass} m-3`}
              />
            </div>

            <div>
              <ul className="text-xl">
                <li className="ml-2 animate__animated animate__lightSpeedInRight animate__delay-1s">
                  <span className="font-bold ">Height: </span>
                  {pokemon.height} m
                </li>
                <hr
                  className={`animate__animated animate__lightSpeedInRight animate__delay-1s border-${colorClass} mt-4 mb-4 mr-[50px]`}
                />
                <li className="ml-2 animate__animated animate__lightSpeedInRight animate__delay-2s">
                  <span className="font-bold">Weight: </span>
                  {pokemon.weight} kg
                </li>
                <hr
                  className={`animate__animated animate__lightSpeedInRight animate__delay-2s border-${colorClass} mt-4 mb-4 mr-[50px]`}
                />
                <li className="ml-2 animate__animated animate__lightSpeedInRight animate__delay-3s">
                  <span className="font-bold">Type: </span>
                  {pokemon.type.join(", ")}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PokemonInfo;
