const axios = require("axios");

const getPokemons = async (req, res) => {

  const pokemons = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=40")
    .then(response => response.data.results);
  const pokemonsUrls = pokemons.map(pokemon => pokemon.url);
  const pokeArray = await Promise.all(pokemonsUrls.map(pokeUrl => axios.get(`${pokeUrl}`)))
    .then(values => {
      return values.map(res => {
        const pokemon = {
          name: res.data.name,
          image: res.data.sprites.other.home.front_default,
          types: res.data.types
        }
        return pokemon
      })
    });
  console.log(pokeArray)
  res.send(pokeArray)

  // console.log(pokemonsUrls);
  // res.send(pokemonsUrls)
};

module.exports = getPokemons;