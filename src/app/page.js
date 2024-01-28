"use client";

import React from "react";
import HeaderComponent from "../components/HeaderComponent";
import CreatePokemonButtonComponent from "../components/CreatePokemonButtonComponent";
import PokemonList from "../components/PokemonListComponent";
import FavoritesButtonComponent from "@/components/FavoritesButtonComponent";
import { getPokemons } from "@/api/pokemonFetch";
import { useEffect, useState } from "react";

export default function Home() {
  const [pokemonList, setPokemonList] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPokemons();
        setPokemonList(data);
        setLoaded(true);
      } catch (error) {
        console.error("Error fetching Pokemon data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <HeaderComponent />

      <div className="animate__animated animate__fadeInUp transition-all duration-1000 ease-in-out flex items-center justify-center mt-[60px] w-[100%] gap-10">
        <CreatePokemonButtonComponent loaded={loaded} />
        <FavoritesButtonComponent loaded={loaded} />
      </div>

      <PokemonList pokemonList={pokemonList} />
      <h1>Favorites</h1>
    </>
  );
}
