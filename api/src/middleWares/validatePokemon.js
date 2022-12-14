const validatePokemon = (req, res, next) => {
  // const { name, life, attack, defense, speed, height, wight, img, types } = req.body;
  const { name } = req.body
  if (!name) return res.status(400).json({ error: "missing name" });
  // if (!life) return res.status(400).json({ error: "missing life" });
  // if (!attack) return res.status(400).json({ error: "missing attack" });
  // if (!defense) return res.status(400).json({ error: "missing defense" });
  // if (!speed) return res.status(400).json({ error: "missing speed" });
  // if (!height) return res.status(400).json({ error: "missing height" });
  // if (!wight) return res.status(400).json({ error: "missing weight" });
  // if (!img) return res.status(400).json({ error: "missing img" });
  // if (!types) return res.status(400).json({ error: "missing types" });
  next();
};

module.exports = validatePokemon;