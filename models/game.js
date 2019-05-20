module.exports = function(sequelize, DataTypes) {

    var Game = sequelize.define("Game", {
        gameDate: {
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
            type: DataTypes.INTEGER,
            allowNULL: false
        },
        teamBOdds: {
            type: DataTypes.INTEGER,
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