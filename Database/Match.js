const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Match = connection.define(
    "Match",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      EventDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      Round: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Status: {
        type: Sequelize.STRING,
        allowNull: false
      },
      StatusShort: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Home: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Away: {
        type: Sequelize.STRING,
        allowNull: false
      },
      GoalsHomeTeam: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      GoalsAwayTeam: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Venue: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HalftimeScore: {
        type: Sequelize.STRING,
        allowNull: false
      },
      FulltimeScore: {
        type: Sequelize.STRING,
        allowNull: false
      },
      ExtratimeScore: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Penalty: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayId: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  Match.getMatchbyID = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  Match.associate = function(models) {
    models.Match.hasMany(models.Odd, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Match;
};
