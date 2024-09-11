const { Sequelize, DataTypes } = require("sequelize");
const dotenv = require("dotenv");
dotenv.config();

const sequelize = new Sequelize({
  database: process.env.DATABASE_NAME, // Use environment variables for flexibility
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "postgres",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Database connection successful.");
  })
  .catch((err) => {
    console.error("Issue in Database connection:", err); // Use `console.error` for errors
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Tables
db.User = require("../models/user.model");

// Relations

// Connections
db.sequelize
  .sync({ alter: true })
  .then(() => {
    console.log("Database sync successful.");
  })
  .catch((err) => {
    console.error("Error during database sync:", err);
  });

module.exports = db;
