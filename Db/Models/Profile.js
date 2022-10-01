const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Profile = sequelize.define('Profile', {
  // Model attributes are defined here
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
},
  day_of_birth: {
    type: DataTypes.DATE,
  },
  gender: {
    type: DataTypes.STRING(1)
  },
  image: {
    type: DataTypes.STRING(255)
  },
  title:{
    type: DataTypes.STRING(255)
  },
  bio: {
    type: DataTypes.STRING(255)
  },
  address:{
    type: DataTypes.STRING()
  },
  user_id:{
    type: DataTypes.INTEGER
  },
  private:{
    type:DataTypes.BOOLEAN,
    defaultValue:false
  }
}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User);