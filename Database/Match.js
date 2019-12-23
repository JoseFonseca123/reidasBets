const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Match = connection.define(
    "Match",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: false,
        primaryKey: true
      },
      EventDate: {
        type: Sequelize.DATE,
        allowNull: false
      },
      LeagueId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      Round: {
        type: Sequelize.STRING,
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
      HomeId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      AwayId: {
        type: Sequelize.INTEGER,
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
        allowNull: true
      },
      GoalsAwayTeam: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      HalftimeScore: {
        type: Sequelize.STRING,
        allowNull: true
      },
      FulltimeScore: {
        type: Sequelize.STRING,
        allowNull: true
      }
    },
    {
      freezeTableName: true,
      timestamps: false
    }
  );

  //insert
  Match.insert = async function (matches) {
    for (i in matches) {
      console.log(matches[i])
      try {
        Match.create({
          id: matches[i].fixture_id,
          EventDate: matches[i].event_date,
          LeagueId: matches[i].league_id,
          Round: matches[i].round,
          Status: matches[i].status,
          StatusShort: matches[i].statusShort,
          HomeId: matches[i].homeTeam.team_id,
          AwayId: matches[i].awayTeam.team_id,
          Home: matches[i].homeTeam.team_name,
          Away: matches[i].awayTeam.team_name,
          GoalsHomeTeam: matches[i].goalsHomeTeam,
          GoalsAwayTeam: matches[i].goalsAwayTeam,
          HalftimeScore: matches[i].score.halftime,
          FulltimeScore: matches[i].score.fulltime,
        })
      }
      catch (e) {
        Console.log('Error Inserting into DB')
        console.log(e);
        console.log(matches[i])
      }
    }
    return 'Countries Insert'
  }



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

  Match.getbyDate = async function (date) {
    return this.findAll({
      raw: true,
      where: {
        EventDate: {
          [Op.gte]: date
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
