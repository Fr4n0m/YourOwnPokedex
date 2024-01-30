"use client";

import HeaderComponent from "@/components/HeaderComponent";
import React from "react";
import { useEffect, useState } from "react";
import CreatePokemonForm from "@/components/CreatePokemonFormComponent";
import PokemonList from "@/components/PokemonListComponent";
import { getPokemons } from "@/api/pokemonFetch";
import BackButton from "@/components/BackButtonComponent";
import { Helmet } from "react-helmet";

export default function createPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemonList(data);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, [refresh]);

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  return (
    <>
      <Helmet>
        <title>Create Pokemon - Pokedex</title>
        <meta content="Create your own Pokemon and add it to the Pokedex" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>

      <HeaderComponent />
      <BackButton />

      <CreatePokemonForm onPokemonAdded={handleRefresh} />

      <PokemonList pokemonList={pokemonList} />
    </>
  );
}
