const axios = require("axios")

const getApiPokemon = async (name) => {

  const pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then(response => {
      const types = response.data.types.map(tipo => (
        tipo.type.name
      ));
      return {
        name: response.data.name,
        image: response.data.sprites.other.home.front_default,
        types: types
      }
    })
    .catch(err => (
      "No pokemon found"
    ))
    return pokemon
};

module.exports = getApiPokemon;