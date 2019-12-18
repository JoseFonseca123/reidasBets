const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Standing = connection.define(
    "Standing",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Rank: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      TeamName: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      Form: {
        type: Sequelize.INTEGER,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Standing.getStandingById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  

  return Standing;
};
