const getApiPokemons = require("./getApiPokemons");
const getApiPokemon = require("./getApiPokemon");
const getDbPokemons = require("./getDbPokemons");
const getDbPokemon = require("./getDbPokemon");
const { getDbPokemonByid, getApiPokemonById } = require("./getPokemonById");

const findPokemon = async (name) => {
  let pokemon = await getDbPokemon(name)
  pokemon ? null : pokemon = await getApiPokemon(name);

  return pokemon ? pokemon : "No pokemons found"
};

const getAllPokemons = async () => {
  const dbPokemons = await getDbPokemons();
  const apiPkemons = await getApiPokemons();
  return [...dbPokemons, ...apiPkemons]
};

const findPokemonById = async (id) => {
  let pokemon;
  id.length > 5 ? pokemon = await getDbPokemonByid(id) : pokemon = await getApiPokemonById(id);
  // let pokemon = await getDbPokemonByid(id);
  // pokemon ? null : pokemon = await getApiPokemonById(id);

  return pokemon ? pokemon : "No pokemons found"
};

module.exports = {
  findPokemon,
  getAllPokemons,
  findPokemonById,
}