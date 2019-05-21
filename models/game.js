module.exports = function(sequelize, DataTypes) {

    var Game = sequelize.define("Game", {
        gameDate: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        gameLink: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        teamA: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        teamB: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        teamAOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        teamBOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        teamAImpOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        teamBImpOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        teamACalcOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        teamBCalcOdds: {
            type: DataTypes.FLOAT,
            allowNULL: false
        },
        WinList: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        betSize: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        betTeam: {
            type: DataTypes.STRING,
            allowNULL: false
        },
        teamAres: {
            type: DataTypes.INTEGER,
            allowNULL: true
        },
        teamBres: {
            type: DataTypes.INTEGER,
            allowNULL: true
        }
    })
    return Game;
}