const { DataTypes } = require("sequelize");
const pokeTypes = require("./pokeTypes.js")

module.exports = (sequelize) => {
  sequelize.define("Type", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.ENUM(pokeTypes),
      defaultValue: "unknown"
    }
  }, { timestamps: false });
};