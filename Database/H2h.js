const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Bookmaker = connection.define("Bookmaker", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: true
    },
  },{
            freezeTableName: true,
                timestamps: false,
              
            } );

  Bookmaker.getBookmakerById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  Bookmaker.associate = function(models) {
    models.Bookmaker.hasMany(models.Odd, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  H2h.associate = function(models) {
    models.H2h.hasMany(models.Match, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Bookmaker;
};
