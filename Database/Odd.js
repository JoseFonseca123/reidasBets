const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Odd = connection.define("Odd", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    LeagueId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    FixtureId: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    Market: {
      type: Sequelize.STRING,
      allowNull: true
    },
    OddType: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Odd: {
      type: Sequelize.STRING,
      allowNull: true
    },
  },{
            freezeTableName: true,
                timestamps: false,
              
            } );

  Odd.getOddById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  

  return Odd;
};
