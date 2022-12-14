const axios = require("axios");

const getApiPokemons = async () => {

  const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(response => response.data.results);
  const pokemonsUrls = pokemons.map(pokemon => pokemon.url);
  const apiPokemons = await Promise.all(pokemonsUrls.map(pokeUrl => axios.get(`${pokeUrl}`)))
    .then(values => {
      return values.map(res => {
        const types = res.data.types.map(tipo => (
          tipo.type.name
        ));
        const pokemon = {
          name: res.data.name,
          image: res.data.sprites.other.home.front_default,
          types: types,
          origin: 'api'
        }
        return pokemon
      })
    });
  return apiPokemons

  // console.log(pokemonsUrls);
  // res.send(pokemonsUrls)
};

module.exports = getApiPokemons;