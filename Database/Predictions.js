const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Predictions = connection.define(
    "Predictions",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      FixtureId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      APIAdvice: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Form: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Att: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Goals: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5GoalsAvg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5GoalsAgainst: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5GoalsAgainstAvg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      HomeLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Form: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Att: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Goals: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5GoalsAvg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5GoalsAgainst: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5GoalsAgainstAvg: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayLast5Def: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
      indexes: [ { unique: true, fields: [ 'FixtureId' ] } ]
    }
  );

  //insert
  Predictions.insert = async function (predictions, fixtureId) {
    for (i in predictions) {
      try {
        Predictions.create({
          FixtureId: fixtureId,
          APIAdvice: predictions[i].advice,
          HomeLast5Form: predictions[i].teams.home.last_5_matches.forme,
          HomeLast5Att: predictions[i].teams.home.last_5_matches.att,
          HomeLast5Def: predictions[i].teams.home.last_5_matches.def,
          HomeLast5Goals: predictions[i].teams.home.last_5_matches.goals,
          HomeLast5GoalsAvg: predictions[i].teams.home.last_5_matches.goals_avg,
          HomeLast5GoalsAgainst: predictions[i].teams.home.last_5_matches.goals_against,
          HomeLast5GoalsAgainstAvg: predictions[i].teams.home.last_5_matches.goals_against_avg,
          HomeLast5Def: predictions[i].teams.home.last_5_matches.goals_against_avg,
          AwayLast5Form: predictions[i].teams.away.last_5_matches.forme,
          AwayLast5Att: predictions[i].teams.away.last_5_matches.att,
          AwayLast5Def: predictions[i].teams.away.last_5_matches.def,
          AwayLast5Goals: predictions[i].teams.away.last_5_matches.goals,
          AwayLast5GoalsAvg: predictions[i].teams.away.last_5_matches.goals_avg,
          AwayLast5GoalsAgainst: predictions[i].teams.away.last_5_matches.goals_against,
          AwayLast5GoalsAgainstAvg: predictions[i].teams.away.last_5_matches.goals_against_avg,
          AwayLast5Def: predictions[i].teams.away.last_5_matches.goals_against_avg,
          AwayLast5Def: predictions[i].teams.away.last_5_matches.goals_against_avg
        })
      }
      catch (e) {
        console.log(e)
      }
    };
  }
  Predictions.getbyId = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  
  return Predictions;
};
