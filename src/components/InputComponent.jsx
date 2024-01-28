import React from "react";
import handleChange from "../components/CreatePokemonFormComponent";
import formData from "../components/CreatePokemonFormComponent";

function InputComponent() {
  return (
    <input
      type="number"
      name="id"
      onChange={handleChange}
      value={formData.id}
      className="mt-1 p-2 border rounded-md w-full focus:border-[#9a0000] focus:outline-none"
      required
    />
  );
}

export default InputComponent;
