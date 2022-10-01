const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define('User', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  last_name: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  user_name: {
    type: DataTypes.STRING(60)
  },
  mail:{
    type: DataTypes.STRING(60)
  },
  password: {
    type: DataTypes.STRING(60)
  },
  code:{
    type: DataTypes.INTEGER
  },
  descripton:{
    type: DataTypes.STRING(60)
  },
  post_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  history_id:{
    type:DataTypes.INTEGER,
    allowNull:false
  },
  is_active:{
    type:DataTypes.BOOLEAN,
    allowNull:false
  },
  is_admin:{
    type:DataTypes.BOOLEAN
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
}
  
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true