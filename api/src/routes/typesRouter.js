const { Router } = require("express");
const getTypes = require("../controllers/typesController");

const typesRouter = Router();

typesRouter.get("/", getTypes)

module.exports = typesRouter