const { Router } = require("express");
const pokemonsController = require("../controllers/pokemonsController");

const pokemonsRouter = Router();

pokemonsRouter.get("/", pokemonsController);
// pokemonsRouter.get("/:idPokemon", )

module.exports = pokemonsRouter;