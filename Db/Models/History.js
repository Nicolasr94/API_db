const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const History = sequelize.define('History', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  title: {
    type: DataTypes.STRING(40),
    allowNull: false
  },
  start_at: {
    type: DataTypes.DATETIME,
    defaultValue:DataTypes.NOW
    // allowNull defaults to true
  },
  finish_at: {
    type: DataTypes.DATETIME
  },
  image:{
    type: DataTypes.STRING(255)
  },
  level: {
    type: DataTypes.INTEGER
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);