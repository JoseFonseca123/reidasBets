const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var TeamStats = connection.define(
    "TeamStats",
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
      LeagueId: {
        type: Sequelize.STRING,
        allowNull: false
      },
      TeamId: {
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
      }
    },

    {
      freezeTableName: true,
      timestamps: false
    }
  );

  //insert
  TeamStats.insert = async function (teamstats, leagueid, teamid) {
    for (i in teamstats) {
      // console.log(teamstats)
      
      // console.log(Object.keys(teamstats)[0])
      // console.log(Object.keys(teamstats.matchs)[0])
      // console.log(teamstats.matchs.matchsPlayed.home)
      // console.log(teamstats.matchs.matchsPlayed.away)
      // console.log(teamstats.matchs.matchsPlayed.total)

      TeamStats.create({
             Type: Object.keys(teamstats)[0],
             SubType: Object.keys(teamstats.matchs)[0],
             LeagueId: leagueid,
             TeamId: teamid,
             Home: teamstats.matchs.matchsPlayed.home,
             Away: teamstats.matchs.matchsPlayed.away,
             Total: teamstats.matchs.matchsPlayed.total
            })

      // console.log(Object.keys(teamstats)[0])
      // console.log(Object.keys(teamstats.matchs)[1])
      // console.log(teamstats.matchs.wins.home)
      // console.log(teamstats.matchs.wins.away)
      // console.log(teamstats.matchs.wins.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[0],
        SubType: Object.keys(teamstats.matchs)[1],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.matchs.wins.home,
        Away: teamstats.matchs.wins.away,
        Total: teamstats.matchs.wins.total
       })
      
      // console.log(Object.keys(teamstats)[0])
      // console.log(Object.keys(teamstats.matchs)[2])
      // console.log(teamstats.matchs.draws.home)
      // console.log(teamstats.matchs.draws.away)
      // console.log(teamstats.matchs.draws.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[0],
        SubType: Object.keys(teamstats.matchs)[2],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.matchs.draws.home,
        Away: teamstats.matchs.draws.away,
        Total: teamstats.matchs.draws.total
      })

      // console.log(Object.keys(teamstats)[0])
      // console.log(Object.keys(teamstats.matchs)[3])
      // console.log(teamstats.matchs.loses.home)
      // console.log(teamstats.matchs.loses.away)
      // console.log(teamstats.matchs.loses.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[0],
        SubType: Object.keys(teamstats.matchs)[3],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.matchs.loses.home,
        Away: teamstats.matchs.loses.away,
        Total: teamstats.matchs.loses.total
       })
      
      
      // console.log(Object.keys(teamstats)[1])
      // console.log(Object.keys(teamstats.goals)[0])
      // console.log(teamstats.goals.goalsFor.home)
      // console.log(teamstats.goals.goalsFor.away)
      // console.log(teamstats.goals.goalsFor.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[1],
        SubType: Object.keys(teamstats.goals)[0],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.goals.goalsFor.home,
        Away: teamstats.goals.goalsFor.away,
        Total: teamstats.goals.goalsFor.total
       })

      // console.log(Object.keys(teamstats)[1])
      // console.log(Object.keys(teamstats.goals)[1])
      // console.log(teamstats.goals.goalsAgainst.home)
      // console.log(teamstats.goals.goalsAgainst.away)
      // console.log(teamstats.goals.goalsAgainst.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[1],
        SubType: Object.keys(teamstats.goals)[1],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.goals.goalsAgainst.home,
        Away: teamstats.goals.goalsAgainst.away,
        Total: teamstats.goals.goalsAgainst.total
       })

      // console.log(Object.keys(teamstats)[2])
      // console.log(Object.keys(teamstats.goals)[0])
      // console.log(teamstats.goalsAvg.goalsFor.home)
      // console.log(teamstats.goalsAvg.goalsFor.away)
      // console.log(teamstats.goalsAvg.goalsFor.total)

      TeamStats.create({
        Type: Object.keys(teamstats)[2],
        SubType: Object.keys(teamstats.goals)[0],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.goalsAvg.goalsFor.home,
        Away: teamstats.goalsAvg.goalsFor.away,
        Total: teamstats.goalsAvg.goalsFor.total
       })

      // console.log(Object.keys(teamstats)[2])
      // console.log(Object.keys(teamstats.goalsAvg)[0])
      // console.log(teamstats.goalsAvg.goalsAgainst.home)
      // console.log(teamstats.goalsAvg.goalsAgainst.away)
      // console.log(teamstats.goalsAvg.goalsAgainst.total)   

      TeamStats.create({
        Type: Object.keys(teamstats)[2],
        SubType: Object.keys(teamstats.goals)[0],
        LeagueId: leagueid,
        TeamId: teamid,
        Home: teamstats.goalsAvg.goalsAgainst.home,
        Away: teamstats.goalsAvg.goalsAgainst.away,
        Total: teamstats.goalsAvg.goalsAgainst.total
       })
      
      };
  };

  TeamStats.getTeam_StatsById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  return TeamStats;
};