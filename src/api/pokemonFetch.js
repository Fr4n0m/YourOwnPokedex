import { pokemons } from "@/mock/dbPokemon";

const listPokemons = pokemons;

const listFavoritesPokemons = [];

export const addToFavoritesPokemons = (pokemonId) => {
  if (!listFavoritesPokemons.includes(getPokemonById(pokemonId))) {
    listFavoritesPokemons.push(getPokemonById(pokemonId));
  } else {
    console.log("Este Pokémon ya se encuentra en los favoritos");
  }
};

export const removeFavoritePokemon = (pokemonId) => {
  const index = listFavoritesPokemons.findIndex(
    (pokemon) => pokemon.id === pokemonId
  );

  if (index !== -1) {
    const removedPokemon = listFavoritesPokemons.splice(index, 1)[0];
    console.log("Removed from favorites:", removedPokemon.name);
  }
};

export const getFavoritesPokemons = () => {
  const mappedPokemons = listFavoritesPokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      url: pokemon.url,
      height: pokemon.height,
      weight: pokemon.weight,
      type: pokemon.type,
    };
  });

  return mappedPokemons;
};

export const getPokemons = () => {
  if (!Array.isArray(listPokemons)) {
    console.error("Error: pokemons no es un array");
    return Promise.resolve([]);
  }

  const mappedPokemons = listPokemons.map((pokemon) => {
    return {
      id: pokemon.id,
      name: pokemon.name,
      url: pokemon.url,
      height: pokemon.height,
      weight: pokemon.weight,
      type: pokemon.type,
    };
  });

  return Promise.resolve(mappedPokemons);
};

export const getPokemonById = (idParam) => {
  let pokemonAux = pokemons.find((pokemon) => pokemon.id == idParam);
  return pokemonAux;
};

export const getPokemonsTypes = [
  "grass",
  "fire",
  "water",
  "electric",
  "poison",
  "flying",
  "bug",
  "normal",
  "ground",
  "fairy",
];

export const modifyName = (idPokemon, newName) => {
  pokemons.map((pokemon) => {
    if (pokemon.id == idPokemon) {
      pokemon.name = newName;
    }
  });
};

export const deletePokemonById = (idPokemon) => {
  let pokemonAux = pokemons.findIndex((pokemon) => pokemon.id == idPokemon);
  pokemons.splice(pokemonAux, 1);
};

/**
 
@param {number} id
@param {string} nombre
@param {string} url
@param {number} height
@param {number} weight
@param {array<string>} type
*/
export const addPokemon = (id, nombre, url, height, weight, type) => {
  pokemons.push({
    id: id,
    name: nombre,
    url: url,
    details: {
      height: height,
      weight: weight,
      type: type,
    },
  });
};
