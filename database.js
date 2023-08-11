const Sequelize=require('sequelize');

const sequelize=new Sequelize('project1','root','Mohammed@123',{
    dialect: 'mysql', host: 'localhost'
});

module.exports=sequelize;