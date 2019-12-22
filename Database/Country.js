const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var Country = connection.define("Country", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: false,
    },
    Name: {
      type: Sequelize.STRING,
      allowNull: false,
      primaryKey: true
    },
    Code: {
      type: Sequelize.STRING,
      allowNull: false
    }
  },{
            freezeTableName: true,
                timestamps: false,
              
            } );

  //insert
  Country.insert = async function(countries) {
    for (i in countries) {
      if (countries[i].code == null)
          countries[i].code = 'WRLD'
      
      Country.create({
          Name: countries[i].country,
          Code: countries[i].code
      })
    }
    return 'Countries Insert'
  };

  Country.getAll = async function() {
    return this.findAll({raw: true});
  };

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

  Country.getCountryByName = async function(name) {
    return this.findAll({
      raw: true,
      where: {
        Name: {
          [Op.eq]: name
        }
      }
    });
  };

  Country.associate = function(models) {
    models.Country.hasMany(models.League, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
 };

  return Country;
};
