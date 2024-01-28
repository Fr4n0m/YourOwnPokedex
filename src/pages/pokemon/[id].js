import { useRouter } from "next/router";
import BackButton from "@/components/BackButtonComponent";
import { getPokemonById, getPokemons } from "../../api/pokemonFetch";
import { useEffect, useState } from "react";
import Header2 from "@/components/Header2Component";
import PokemonInfo from "@/components/PokemonInfoComponent";
import React from "react";
import PokemonList from "@/components/PokemonListComponent";
import EditForm from "@/components/EditFormComponent";
import { Button } from "@mui/material";
import { Helmet } from "react-helmet";

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
  const [isEditing, setIsEditing] = useState(false);

  const handleEditComplete = () => {
    setIsEditing(false);
  };

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

  if (!pokemon) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Helmet>
        <title>Pokemon Wiki - Pokedex</title>
        <meta content="Show your pokemons" />
      </Helmet>
      <Header2 />
      <BackButton />
      <PokemonInfo pokemonId={pokemonId} />
      <Button>
        <span>Edit</span>
      </Button>
      <PokemonList pokemonList={pokemonList} />
    </>
  );
}
