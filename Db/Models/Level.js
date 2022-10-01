const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

sequelize.define('Level',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement:true,
        primeraKey:true
    },
    name: {
        type:DataTypes.STRING(255)
    }
});

console.log(Level === sequelize.models.Level)