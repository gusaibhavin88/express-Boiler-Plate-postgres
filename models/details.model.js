const { DataTypes } = require("sequelize");
const db = require("../config/dbConnection");
const User = require("./user.model");

const User_Details = db.sequelize.define(
  "User_Details",
  {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    phone: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isNumeric: true,
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: User,
        key: "id",
      },
      // onDelete: "CASCADE",
    },
  },
  {
    timestamps: true,
    tableName: "user_details",
  }
);

module.exports = User_Details;
