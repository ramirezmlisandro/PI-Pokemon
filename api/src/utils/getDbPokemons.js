const { Pokemon, Type } = require("../db");

const getDbPokemons = async () => {
  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"]
    }
  });
  const dbPokemonsClean = dbPokemons.map(pokemon => {
    const tipos = pokemon.types.map(tipo => (
      tipo.name
    ));
    return {
      name: pokemon.name,
      image: pokemon.img,
      types: tipos,
      origin: 'db',
    }
  });
  return dbPokemonsClean;
};

module.exports = getDbPokemons;