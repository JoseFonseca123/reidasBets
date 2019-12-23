const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Team = connection.define(
    "Team",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Country: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LeagueId: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  //insert
  Team.insert = async function (teams) {
    for (i in teams) {
      if (teams[i].name != null) {
        console.log(teams[i].country);
        console.log(teams[i].name);
        Team.create({
          id: teams[i].team_id,
          Name: teams[i].name,
          Country: teams[i].country,
          LeagueId: teams[teams.length - 1].league_id
        });
      }
    }
  };

  Team.getbyId = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  Team.getbyLeague = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        LeagueId: {
          [Op.eq]: ID
        }
      }
    });
  };

  // Team.associate = function(models) {
  //   models.Team.hasMany(models.TeamStats, {
  //     onDelete: "CASCADE",
  //     foreignKey: {
  //       allowNull: false
  //     }
  //   });
  // };
  return Team;
};
