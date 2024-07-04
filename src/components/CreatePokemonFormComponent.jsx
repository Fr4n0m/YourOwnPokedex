import React, { useState } from "react";
import { Button } from "@mui/material";
import { addPokemon, getPokemons, getPokemonsTypes } from "@/api/pokemonFetch";

const PokemonForm = () => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    height: "",
    weight: "",
    type: [],
  });

  const typeOptions = getPokemonsTypes;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const isNumeric = (value) => {
    return /^\d+$/.test(value);
  };

  const isIdUnique = async (id) => {
    try {
      // Obtener la lista de Pokémon
      const pokemons = await getPokemons();
      console.log("Lista de Pokémon:", pokemons);

      const existingPokemon = pokemons.find((pokemon) => pokemon.id === id);
      console.log("Pokémon existente:", existingPokemon);

      return !existingPokemon;
    } catch (error) {
      console.error("Error al obtener la lista de Pokémon:", error);
      return false;
    }
  };

  const handleSubmit = async () => {
    /* if (
      formData.id === null ||
      formData.id === "" ||
      formData.nombre === null ||
      formData.nombre === "" ||
      formData.height === null ||
      formData.height === "" ||
      formData.weight === null ||
      formData.weight === "" ||
      formData.type === null ||
      formData.type === ""
    ) {
      console.error("No puede haber campos vacíos.");
      alert("No puede haber campos vacíos.");
      return;
    } */

    if (!isNumeric(formData.id)) {
      console.error("ID debe ser un número.");
      alert("ID debe ser un número.");
      return;
    }

    if (typeof formData.name !== "string") {
      console.error("Nombre debe ser una cadena de texto.");
      alert("Nombre debe ser una cadena de texto.");
      return;
    }

    const idIsUnique = await isIdUnique(formData.id);

    if (!idIsUnique) {
      console.error("ID ya existe en la lista de Pokémon.");
      alert("ID ya existe en la lista de Pokémon.");
      return;
    }

    if (typeof formData.name !== "string") {
      console.error("Nombre debe ser una cadena de texto.");
      alert("Nombre debe ser una cadena de texto.");
      return;
    }

    if (formData.weight <= 0 || formData.height <= 0) {
      console.error("El peso o la altura no pueden ser cero o negativos");
      alert("El peso o la altura no pueden ser cero o negativos");
      return;
    }

    const pokemon = {
      id: formData.id,
      nombre: formData.name,
      url: formData.url,
      height: formData.height,
      weight: formData.weight,
      type: formData.type || [],
    };

    addPokemon(
      pokemon.id,
      pokemon.name,
      pokemon.url,
      pokemon.height,
      pokemon.weight,
      pokemon.type
    );

    //?Para que se actualice la pagina cuando se agregue un nuevo pokemon, está comentado porque da error, al llevarme el pokemon los valores son undefined y peta. Pero el consolelog si que se muestra el pokemon creado.
    /* if (onPokemonAdded) {
      onPokemonAdded();
    } */

    console.log("Nuevo Pokémon:", pokemon);
    const updatedPokemons = await getPokemons();
    console.log("Lista actualizada de Pokémon:", updatedPokemons);
  };

  return (
    <div className="animate__animated animate__fadeInUp container mx-auto p-4 bg-gray-100 max-w-md rounded-md">
      <h1 className="text-2xl font-bold mb-4 text-center">CREATE POKEMON</h1>
      <form>
        {/*Cambiar id*/}
        <div className="mb-4">
          <label
            htmlFor="id"
            className="block text-sm font-medium text-gray-600"
          >
            ID:
          </label>
          <input
            type="number"
            name="id"
            onChange={handleChange}
            value={formData.id}
            className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
            required
          />
        </div>

        {/*Cambiar name*/}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-600"
          >
            Name:{" "}
          </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={formData.name}
            className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
          />
        </div>

        {/*Cambiar height*/}
        <div className="mb-4">
          <label
            htmlFor="height"
            className="block text-sm font-medium text-gray-600"
          >
            Height:{" "}
          </label>
          <input
            type="number"
            name="height"
            onChange={handleChange}
            value={formData.height}
            className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
          />
        </div>

        {/*Cambiar weight*/}
        <div className="mb-4">
          <label
            htmlFor="weight"
            className="block text-sm font-medium text-gray-600"
          >
            Weight:{" "}
          </label>
          <input
            type="number"
            name="weight"
            onChange={handleChange}
            value={formData.weight}
            className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
          />
        </div>

        {/*Cambiar type*/}
        <div className="mb-4">
          <label
            htmlFor="type"
            className="block text-sm font-medium text-gray-600"
          >
            Type:{" "}
          </label>
          <select
            name="type"
            onChange={handleChange}
            value={formData.type}
            className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
          >
            <option value="" disabled>
              Select type
            </option>
            {typeOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className="grid">
          <Button
            type="button"
            onClick={handleSubmit}
            className="bg-[#fd0000] hover:bg-[#9a0000] text-teal-50 py-2 px-4 rounded-md"
          >
            Create Pokemon
          </Button>
        </div>
      </form>
    </div>
  );
};

export default PokemonForm;
