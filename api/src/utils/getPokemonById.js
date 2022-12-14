const axios = require("axios");
const { Pokemon, Type} = require("../db")


const getDbPokemonByid = async (id) => {
  let pokemon = await Pokemon.findOne({
    where: { id: id },
    include: {
      model: Type,
      attributes: ["name"]
    }
  });
  return pokemon
};

const getApiPokemonById = async (id) => {
  let pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(response => {
      const types = response.data.types.map(tipo => (
        tipo.type.name
      ));
      const pokemon = {
        id: response.data.id,
        name: response.data.name,
        life: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        img: response.data.sprites.other.home.front_default,
        types: types
      }
      return pokemon
    })
    .catch(err => (
      "No pokemon found"
    ))
  return pokemon
}

module.exports = {
  getDbPokemonByid,
  getApiPokemonById
};