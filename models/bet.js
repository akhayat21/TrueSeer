module.exports = function(sequelize, DataTypes) {
  var Bet = sequelize.define("Bet", {
    gameid: {
        type: DataTypes.INTEGER,
        reference: {
            model: "Game",
            key: "id"
        }
    },
    userid: {
        type: DataTypes.INTEGER,
        reference: {
            model: "User",
            key: "id"
        }
    },
    betChoice: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    betSize: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
  });
  return Bet;
};
