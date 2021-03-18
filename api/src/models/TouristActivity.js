const { DataTypes } = require("sequelize")
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("touristActivity", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    difficulty: {
      type: DataTypes.ENUM({
        values: ["1", "2", "3", "4", "5"],
      }),
      allowNull: false,
    },
    duration: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
    season: {
      type: DataTypes.ENUM({
        values: ["Summer", "Fall", "Winter", "Spring"],
      }),
      allowNull: false,
    },
  })
}
