const connection = require("./Config");
const Sequelize = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  var Op = Sequelize.Op;
  var League = connection.define("League", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
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
    Country_id: {
     type: Sequelize.INTEGER,
     allowNull: false
    }
  }
  ,{
            freezeTableName: true,
                timestamps: false,
    indexes: [
                      {
                          unique: true,
                          fields: ['Country_id']
                      }
                  ] 
              
            } );

  League.getCountryById = async function(ID) {
    return this.findAll({
      raw: true,
      where: {
        id: {
          [Op.eq]: ID
        }
      }
    });
  };



  return League;
};
