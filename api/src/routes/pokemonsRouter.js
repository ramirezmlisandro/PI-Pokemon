const { Router } = require("express");
const { getPokemons, getPokemonById, postPokemon } = require("../controllers/pokemonsController");
const validatePokemon = require("../middleWares/validatePokemon");

const pokemonsRouter = Router();

pokemonsRouter.get("/", getPokemons);
pokemonsRouter.get("/:id", getPokemonById);
pokemonsRouter.post("/", validatePokemon, postPokemon);

module.exports = pokemonsRouter;