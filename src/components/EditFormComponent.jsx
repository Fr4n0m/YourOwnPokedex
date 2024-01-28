import React, { useState } from "react";
import { getPokemonById, modifyName } from "@/api/pokemonFetch";
import { Button } from "@mui/material";

const EditForm = ({ pokemonId, onEditComplete }) => {
  const pokemon = getPokemonById(pokemonId);

  const [newName, setNewName] = useState(pokemon.name);

  const handleEditSubmit = (e) => {
    e.preventDefault();
    modifyName(pokemon.id, newName);
    onEditComplete();
  };

  return (
    <form onSubmit={handleEditSubmit}>
      <label>
        Nuevo Nombre:
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
        />
      </label>
      <Button type="submit">Save</Button>
    </form>
  );
};

export default EditForm;
