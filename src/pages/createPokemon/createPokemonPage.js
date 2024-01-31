"use client";

import HeaderComponent from "@/components/HeaderComponent";
import React from "react";
import { useEffect, useState } from "react";
import CreatePokemonForm from "@/components/CreatePokemonFormComponent";
import PokemonList from "@/components/PokemonListComponent";
import { getPokemons } from "@/api/pokemonFetch";
import BackButton from "@/components/BackButtonComponent";
import { Helmet } from "react-helmet";
import FavoritesList from "@/components/FavoritesListComponent";

export default function createPokemon() {
  const [pokemonList, setPokemonList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      const parsedFavorites = JSON.parse(storedFavorites);
      setFavorites(parsedFavorites);
      console.log("Favorites loaded from localStorage:", parsedFavorites);
    }

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

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <>
      <Helmet>
        <title>Create Pokemon - Pokedex</title>
        <meta content="Create your own Pokemon and add it to the Pokedex" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>

      <HeaderComponent />
      <BackButton />

      <CreatePokemonForm />

      <PokemonList
        pokemonList={pokemonList}
        favorites={favorites}
        setFavs={setFavorites}
      />

      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </>
  );
}
