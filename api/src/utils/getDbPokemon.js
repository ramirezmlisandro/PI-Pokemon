const { Pokemon, Type } = require("../db");

const getDbPokemon = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { name: name },
    include: {
      model: Type,
      attributes: ["name"]
    }
  })

  if (pokemon) {
    const tipos = pokemon.types.map(tipo => (
      tipo.name
    ));

    const pokemonClean = {
      name: pokemon.name,
      image: pokemon.img,
      types: tipos,
      origin: 'db',
    }

    return pokemonClean
  }
  return pokemon
};

module.exports = getDbPokemon;