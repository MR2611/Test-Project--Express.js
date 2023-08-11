const Sequelize=require('sequelize');
const sequelize=require('../server/database');

const User=sequelize.define('products', {
    Id: {
        type:Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
    },
    product:{
        type:Sequelize.STRING,
        unique:true
    },
    price:{
        type:Sequelize.INTEGER
    },
    option:{
        type:Sequelize.STRING
    }
});
module.exports=User;