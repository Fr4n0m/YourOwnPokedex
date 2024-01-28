import React from "react";
import { Helmet } from "react-helmet";

export default function favorites() {
  return (
    <>
      <Helmet>
        <title>Favorites Pokemons - Pokedex</title>
        <meta content="Your favorites Pokemons" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>
    </>
  );
}
