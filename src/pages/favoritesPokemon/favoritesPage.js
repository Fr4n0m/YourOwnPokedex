import { getFavoritesPokemons } from "@/api/pokemonFetch";
import HeaderComponent from "@/components/HeaderComponent";
import PokemonList from "@/components/PokemonListComponent";
import React from "react";

export default function favoritesPage() {
  const favoritesList = getFavoritesPokemons();

  //?Debería de salir la lista de pokemonsFavoritos pero no encuentro la manera de que esa lista no se pierda o se me pase como undefined, he intentado mil formas y nada, no sé si con localStorage se podría guardar entre paginas el array. Lo he probado y tampoco lo he conseguido.

  return (
    <>
      <HeaderComponent />

      <PokemonList pokemonList={favoritesList} />
    </>
  );
}
