import { getFavoritesPokemons, getPokemons } from "@/api/pokemonFetch";
import HeaderComponent from "@/components/HeaderComponent";
import PokemonList from "@/components/PokemonListComponent";
import React from "react";
import { Helmet } from "react-helmet";

export default function favorites() {
  const pokemonFavoritesList = getFavoritesPokemons();
  console.log(pokemonFavoritesList);

  return (
    <>
      <Helmet>
        <title>Favorites Pokemons - Pokedex</title>
        <meta content="Your favorites Pokemons" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>
      <HeaderComponent />

      <PokemonList pokemonList={pokemonFavoritesList} />
    </>
  );
}
