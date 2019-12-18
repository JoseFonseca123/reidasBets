const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Team_Stats = connection.define(
    "Team_Stats",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SubType: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Home: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Away: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
    },
    
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Team_Stats.getTeam_StatsById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  return Team_Stats;
};
