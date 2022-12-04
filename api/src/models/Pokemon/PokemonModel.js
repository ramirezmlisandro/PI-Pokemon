const { DataTypes } = require("sequelize");
// const fs = require("fs");


// const defaultImage = fs.readFileSync(__dirname + "/Pokémon_logo.svg.png");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("Pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: [0, 20]
      },
    },
    life: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    attack: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    defense: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    speed: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    height: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    weight: {
      type: DataTypes.INTEGER,
      validate: {
        min: 0,
        max: 999
      }
    },
    img: {
      type: DataTypes.BLOB,
    }
  }, { timestamps: false });
};
