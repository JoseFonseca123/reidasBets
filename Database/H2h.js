const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var H2H = connection.define(
    "H2H",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      LeagueId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      EventDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      HomeTeamId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      AwayTeamId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      GoalsHome: {
        type: Sequelize.STRING,
        allowNull: true
      },
      GoalsAway: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ScoreHT: {
        type: Sequelize.STRING,
        allowNull: true
      },
      ScoreFT: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

   //iNSERT
   H2H.insert = async function (h2h) {
    for (i in h2h) {
      H2H.create({
        LeagueId: h2h[i].league_id,
        EventDate: h2h[i].event_date,
        HomeTeamId: h2h[i].homeTeam.team_id,
        AwayTeamId: h2h[i].awayTeam.team_id,
        GoalsHome: h2h[i].goalsHomeTeam,
        GoalsAway: h2h[i].goalsAwayTeam,
        ScoreHT: h2h[i].score.halftime,
        ScoreFT: h2h[i].score.fulltime
      })
    }
  };

  H2H.getById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  return H2H;
};
