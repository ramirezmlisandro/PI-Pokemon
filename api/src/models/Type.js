const { DataTypes } = require("sequelize");
const pokeTypes = require("./Types/pokeTypes")

module.exports = (sequelize) => {
  sequelize.define("type", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.ENUM(pokeTypes),
      defaultValue: "unknown",
    }
  }, { timestamps: false });
};