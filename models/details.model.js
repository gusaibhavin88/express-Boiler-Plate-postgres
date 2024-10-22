"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class UserDetail extends Model {
    static associate(models) {}
  }
  UserDetail.init(
    {},
    {
      sequelize,
      modelName: "UserDetail",
      timestamps: true,
    }
  );
  return UserDetail;
};
