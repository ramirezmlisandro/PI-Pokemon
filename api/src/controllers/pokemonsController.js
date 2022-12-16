const { getAllPokemons, findPokemon, findPokemonById } = require("../utils/utils")
const { Pokemon, Type } = require("../db");
const { Op } = require("sequelize");


const getPokemons = async (req, res) => {
  try {
    const { name } = req.query;
    let results = name ? await findPokemon(name) : await getAllPokemons();
    res.status(200).send(results);
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};

const getPokemonById = async (req, res) => {
  try {
    let pokemon = await findPokemonById(req.params.id);
    res.status(200).send(pokemon)
  } catch (error) {
    res.status(400).json({ error: error.message });
  };
};

const postPokemon = async (req, res) => {
  try {
    const { name, hp, attack, defense, speed, height, weight, types } = req.body;
    const newPokemon = await Pokemon.create({
      name,
      hp,
      attack,
      defense,
      speed,
      height,
      weight,
    });
    // const tipos = await Type.findAll({
    //   where: {
    //     name: "electric"
    //   }
    // })
    // const tipos = await types.map(async (tipo) => {
    //   await Type.findOne({
    //     where: {
    //       name: tipo.name
    //     }
    //   })
    // })
    // await newPokemon.setTypes(tipos)
    await types.forEach(async (tipo) => {
      const type = await Type.findOne({
        where: {
          name: tipo.name
        }
      })
      await newPokemon.setTypes(type)
    })
    res.status(200).json(newPokemon);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getPokemons,
  getPokemonById,
  postPokemon,
};