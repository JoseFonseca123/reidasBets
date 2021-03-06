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
      Updated:
      {
        type: Sequelize.DATE,
        allowNull: false
      },
      TeamId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        unique: true
      },
      Position: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      TeamName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      LeagueName: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Form: {
        type: Sequelize.STRING,
        allowNull: true
      },
      GoalsDiff: {
        type: Sequelize.STRING,
        allowNull: false
      },
      Points: {
        type: Sequelize.INTEGER,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );


  //inserty
  Standing.insert = async function (standings, league_id) { 
    console.log(new Date())
    for (i in standings) {
      console.log(standings[i])
      try {
        if (standings[i])
           Standing.create({
             TeamId: standings[i].team_id,
             Position: standings[i].rank,
             TeamName: standings[i].teamName,
             LeagueName: standings[i].group,
             Form: standings[i].forme,
             GoalsDiff: standings[i].goalsDiff,
             Points: standings[i].points,
             Updated: new Date(),
             LeagueId: league_id
           });
      }
      catch (e) {
        console.log('Printing stands: ' + standings[i])
        console.log(e)
      }
    }
   
    return "Countries Insert";
  };

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
