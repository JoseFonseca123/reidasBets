const connection = require('./Config');
const Sequelize = require('sequelize');


module.exports = (sequelize, DataTypes) => {
    var Op = Sequelize.Op
    var Match = connection.define('Match', {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        Match_Date: {
            type: DataTypes.DATE,
            defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
        },
        Country: {
            type: Sequelize.STRING,
            allowNull: true
        },
        League: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Team1: {
            type: Sequelize.STRING,
            allowNull: false
        },
        Team2: {
            type: Sequelize.STRING,
            allowNull: false
        },
        T1Score: {
            type: Sequelize.STRING,
            allowNull: true
        },
        T2Score: {
            type: Sequelize.STRING,
            allowNull: true
        },
        My_Odd: {
            type: Sequelize.STRING,
            allowNull: true
        },
        URL: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        freezeTableName: true,
            timestamps: false,
            indexes: [
                {
                    unique: true,
                    fields: ['League', 'Team1', 'Team2']
                }
            ]
        })
    
    Match.getMatchbyID = async function (ID) {
        return this.findAll({
            raw: true,
            where: {
                id: {
                    [Op.eq]: ID
                  }
            }
        })
    }

    Match.getCount = async function () {
        return this.count()
    }
    Match.getURLafterDate = async function (date) {
        return this.findAll({
            raw: true,
            attributes: ['URL'],
            where: {
                Match_Date: {
                    [Op.gte]: date
                }
            }
        })
    };
    
    Match.getTodaysMatch = async function () {
        var today = new Date();
        today.setHours(-60);
        today.setMinutes(0);
        today.setSeconds(0);
        today.setMilliseconds(0);
        return this.findAll({
            raw: true,
            where: {
                Match_Date: {
                    [Op.gte]: today
                }
            }
        })
    };

    Match.updateOdd = async function (Odd, matchId) {
        console.log("update")
        this.update({
            My_Odd: Odd
        } , {
            where : {
                id :{
                    [Op.eq] : matchId
                }
            }
        });
    };

    // Match.associate = function (models) {
    //     models.Match.hasMany(models.Results, {
    //         onDelete: "CASCADE",
    //         foreignKey: {
    //             allowNull: false
    //         }
    //     },
    //         models.Match.hasMany(models.GoalStats, {
    //             onDelete: "CASCADE",
    //             foreignKey: {
    //                 allowNull: false
    //             }
    //         }),
    //         models.Match.hasMany(models.Streaks, {
    //             onDelete: "CASCADE",
    //             foreignKey: {
    //                 allowNull: false
    //             }
    //         }),
    //         models.Match.hasMany(models.ScoringStats, {
    //             onDelete: "CASCADE",
    //             foreignKey: {
    //                 allowNull: false
    //             }
    //         }),
    //         models.Match.hasMany(models.HalfTime, {
    //             onDelete: "CASCADE",
    //             foreignKey: {
    //                 allowNull: false
    //             }
    //         }),
    //         models.Match.hasMany(models.vsLeague, {
    //             onDelete: "CASCADE",
    //             foreignKey: {
    //                 allowNull: false
    //             }
    //         })
    //     )};
    return Match;
}