const getPokemon = require("../utils/getPokemon");
const getPokemons = require("../utils/getPokemons");


const pokemonsController = (req, res) => {
  req.query.name ? getPokemon(req, res) : getPokemons(req, res)
};

module.exports = pokemonsController