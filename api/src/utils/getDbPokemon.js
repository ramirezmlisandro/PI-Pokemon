const { Pokemon, Type } = require("../db");

const getDbPokemon = async (name) => {
  const pokemon = await Pokemon.findOne({
    where: { name: name },
    include: {
      model: Type,
      attributes: ["name"]
    }
  })
  return pokemon
};

module.exports = getDbPokemon;