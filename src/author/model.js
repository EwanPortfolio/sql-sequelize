const { DataTypes } = require("sequelize");
const connection = require("../db/connection");


 const Author = connection.define("Author", {
    Name:{
        type: DataTypes.STRING,
        unique : true,
        allowNull: false,
   }});



module.exports = Author