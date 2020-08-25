const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  //경매 입찰 테이블
  const AuctionBiddings = sequelize.define(
    "AuctionBiddings",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      price: {
        type: DataTypes.DECIMAL(14, 2),
        allowNull: false,
      },

      minPrice: {
        //10진수 원화단위가 커서 (정수 14자리 실수 2자리)
        type: DataTypes.DECIMAL(14, 2),
        unique: false,
        allowNull: false,
        defaultValue: 0,
      },
    },
    {
      sequelize: sequelize,
      timestamps: true,
      moduleName: "AuctionBiddings",
      tableName: "auctionBiddings",
      paranoid: true,
      charset: "utf8",
      collation: "utf8_general_ci",
    }
  );

  return AuctionBiddings;
};
