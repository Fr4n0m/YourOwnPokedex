"use client";

import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PokemonList from "../components/PokemonListComponent";
import { getFavoritesPokemons, getPokemons } from "@/api/pokemonFetch";
import { useEffect, useState } from "react";
import ButtonGroupComponent from "@/components/ButtonGroupComponent";
import { Helmet } from "react-helmet";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        const dataFav = getFavoritesPokemons();
        setPokemonList(data);
        setFavorites(dataFav);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Helmet>
        <title>Create Pokemon - Pokedex</title>
        <meta content="Create your own Pokemon and add it to the Pokedex" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>
      <HeaderComponent />
      <ButtonGroupComponent className="button-group-component" />
      <PokemonList pokemonList={pokemonList} />
    </>
  );
}
