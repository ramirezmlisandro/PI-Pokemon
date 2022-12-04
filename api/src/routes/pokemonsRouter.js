const { Router } = require("express");
const getPokemons = require("../controllers/pokemonsController")
const getPokemon = require("../middleWares/pokemonsMiddleware");


const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemon, getPokemons);

module.exports = pokemonsRouter;