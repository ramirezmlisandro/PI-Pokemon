const { Type } = require("../db");
const axios = require("axios");

const getTypes = async (req, res) => {
  try {
    let types = await Type.findAll()
    if (!types.length) {
      await axios.get("https://pokeapi.co/api/v2/type")
        .then(response => {
          response.data.results.forEach(async tipo => await Type.create({ name: tipo.name }))
        })
        .catch(err => {
          return { error: err }
        });
      types = await Type.findAll()
    };
    types = await Type.findAll()
    res.status(200).send(types)
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getTypes;