const { Pokemon, Type } = require("../db");

const getDbPokemons = async () => {
  const dbPokemons = await Pokemon.findAll({
    include: {
      model: Type,
      attributes: ["name"]
    }
  });
  const dbPokemonsClean = dbPokemons.map(pokemon => (
    {
      name: pokemon.name,
      img: pokemon.img,
      types: pokemon.types,
      origin: 'db',
    }
  ));
  return dbPokemonsClean;
};

module.exports = getDbPokemons;