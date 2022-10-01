const { Sequelize, DataTypes, STRING } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory')

const Title_collection = sequelize.define('Title_collection',{
    id:{
        type:DataTypes.STRING(255),
        primaryKey:true
    },
    name:{
        type:DataTypes.STRING(255)
    }
})