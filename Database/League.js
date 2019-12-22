const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var League = connection.define(
    "League",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true
      },
      Name: {
        type: Sequelize.STRING,
        allowNull: true
      },
      Type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      CountryCode: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SeasonStart: {
        type: Sequelize.STRING,
        allowNull: false
      },
      SeasonEnd: {
        type: Sequelize.STRING,
        allowNull: false
      }
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  //insert
  League.insert = async function (leagues) {
    for (i in leagues) {
      if (leagues[i].country_code == null) {
        leagues[i].country_code = 'WRLD'
      }
      League.create({
        id: leagues[i].league_id,
        Name: leagues[i].name,
        Type: leagues[i].type,
        CountryCode: leagues[i].country_code,
        SeasonStart: leagues[i].season_start,
        SeasonEnd: leagues[i].season_end,
        CountryName: leagues[i].country
      })
    }
    return 'Countries Insert'
  }
  
  League.getAll = async function() {
    return this.findAll({raw: true});
  };

  //get by ID
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

  //Secondary Keys
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
        allowNull: true
      }
    });
  };

  return League;
};
