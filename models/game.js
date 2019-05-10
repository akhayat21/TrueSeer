module.exports = function(sequelize, DataTypes) {

    var Game = sequelize.define("Game", {
        gameDate: {
            type: DataTypes.DATEONLY,
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
            type: DataTypes.TEXT,
            allowNULL: false
        },
        teamBOdds: {
            type: DataTypes.TEXT,
            allowNULL: false
        },
        result: {
            type: DataTypes.BOOLEAN,
            allowNULL: true
        }
    })

    return Game;
}