const { DataTypes } = require('sequelize');
const sequelize = require('../db/dbConnect');


const Blague = sequelize.define(
    'Blague',
    {
      // Model attributes are defined here
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      question: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      answer: {
        type: DataTypes.STRING,
        allowNull: false
      }
    },
    {
      // Other model options go here
      freezeTableName: true
    },
);

module.exports = Blague;