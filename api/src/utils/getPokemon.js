const { Pokemon } = require("../db")
const axios = require("axios")

const getPokemon = async (req, res) => {

  let pokemon = await Pokemon.findOne({ where: { name: req.query.name } });
  pokemon ? null : pokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon/${req.query.name}`)
    .then(response => (
      {
        id: response.data.id,
        name: response.data.name,
        life: response.data.stats[0].base_stat,
        attack: response.data.stats[1].base_stat,
        defense: response.data.stats[2].base_stat,
        speed: response.data.stats[5].base_stat,
        height: response.data.height,
        weight: response.data.weight,
        img: response.data.sprites.other.home.front_default
      }
    ))
  res.status(200).json(pokemon)
};

module.exports = getPokemon