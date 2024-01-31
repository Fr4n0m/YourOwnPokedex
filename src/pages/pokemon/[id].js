import { useRouter } from "next/router";
import BackButton from "@/components/BackButtonComponent";
import { getPokemonById, getPokemons } from "../../api/pokemonFetch";
import { useEffect, useState } from "react";
import PokemonInfo from "@/components/PokemonInfoComponent";
import React from "react";
import PokemonList from "@/components/PokemonListComponent";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";
import HeaderComponent from "@/components/HeaderComponent";
import FavoritesList from "@/components/FavoritesListComponent";

const extractPokemonIdFromPath = (path) => {
  const pathSegments = path.split("/");
  const lastSegment = pathSegments.pop();
  return lastSegment;
};

export default function PokemonDetails() {
  const router = useRouter();
  const { asPath } = router;
  const [pokemon, setPokemon] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // Obtener el ID del Pokémon desde la ruta
  const pokemonId = parseInt(extractPokemonIdFromPath(asPath));

  useEffect(() => {
    const fetchData = async () => {
      const data = await getPokemonById(pokemonId);
      setPokemon(data);
    };

    fetchData();
  }, [pokemonId]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("favorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
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

  if (!pokemon) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-[yellow] text-[100px] font-bold uppercase text-shadow shadow-[black]">
          Loading...
        </p>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>Pokemon Wiki - Pokedex</title>
        <meta content="Show your pokemons" />
        <link rel="icon" href="/assets/icons/icon-pokeball-16.png"></link>
      </Helmet>

      <HeaderComponent />
      <BackButton />

      <PokemonInfo pokemonId={pokemonId} />

      <PokemonList
        pokemonList={pokemonList}
        favorites={favorites}
        setFavs={setFavorites}
      />

      <FavoritesList favorites={favorites} setFavorites={setFavorites} />
    </>
  );
}
