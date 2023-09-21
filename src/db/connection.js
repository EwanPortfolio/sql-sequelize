
const { Sequelize } = require("sequelize");


const connection = new Sequelize(process.env.MYSQL_URL);

connection.authenticate();

console.log("DB conneciton is working");

module.exports = connection;
