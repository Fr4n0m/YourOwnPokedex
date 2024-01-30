import { getFavoritesPokemons } from "@/api/pokemonFetch";
import BackButton from "@/components/BackButtonComponent";
import HeaderComponent from "@/components/HeaderComponent";
import PokemonList from "@/components/PokemonListComponent";
import React from "react";
import { Helmet } from "react-helmet";

export default function favoritesPage() {
  const favoritesList = getFavoritesPokemons();

  //?Debería de salir la lista de pokemonsFavoritos pero no encuentro la manera de que esa lista no se pierda o se me pase como undefined, he intentado mil formas y nada, no sé si con localStorage se podría guardar entre paginas el array. Lo he probado y tampoco lo he conseguido.

  return (
    <>
      <Helmet>
        <title>Favorites Pokemon - Pokedex</title>
        <meta content="Create your own Pokemon and add it to the Pokedex" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>

      <HeaderComponent />
      <BackButton />

      <PokemonList pokemonList={favoritesList} />
    </>
  );
}
