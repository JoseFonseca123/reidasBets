const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Country = connection.define("Country", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: true
    },
    Code: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
            freezeTableName: true,
                timestamps: false,
              
            } );

  Country.getCountryById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };

  Country.associate = function (models) {
            models.Country.hasMany(models.League, {
                onDelete: "CASCADE",
                foreignKey: {
                    allowNull: false
                }
            })}

  return Country;
};
