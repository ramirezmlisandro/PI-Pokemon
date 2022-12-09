const axios = require("axios");
const { Pokemon } = require("../db")

const getPokemonByIdUtil = async (req, res) => {
  //tiene que devolver nombre, imagen, tipos, id, life attack, 
  // res.send("you're in getPokemonByIdUtil")
  let pokemon = await Pokemon.findOne({ where: { name: req.params.id } });
  pokemon ? null : pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.params.id}`)
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
  res.status(200).json(pokemon)
};

module.exports = getPokemonByIdUtil;