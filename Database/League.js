const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var League = connection.define(
    "League",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  League.getLeagueById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  League.associate = function(models) {
    models.League.hasMany(models.Team, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  League.associate = function(models) {
    models.League.hasOne(models.Standing, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return League;
};
