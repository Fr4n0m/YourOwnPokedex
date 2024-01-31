"use client";

import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import PokemonList from "../components/PokemonListComponent";
import { getFavoritesPokemons, getPokemons } from "@/api/pokemonFetch";
import { useEffect, useState } from "react";
import ButtonGroupComponent from "@/components/ButtonGroupComponent";
import { Helmet } from "react-helmet";
import FavoritesList from "../components/FavoritesListComponent";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [favorites, setFavorites] = useState([]);

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
  }, []);

  return (
    <>
      <Helmet>
        <title>Create Pokemon - Pokedex</title>
        <meta content="Create your own Pokemon and add it to the Pokedex" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>

      <HeaderComponent />

      <ButtonGroupComponent />

      <PokemonList
        pokemonList={pokemonList}
        favorites={favorites}
        setFavs={setFavorites}
      />

      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </>
  );
}
