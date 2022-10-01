const {Sequelize, DataTypes} = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const Post = sequelize.define('Post', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    title:{
        type: DataTypes.STRING(40),
    },
    description:{
        type: DataTypes.STRING(255),
    },
    start_at:{
        type: DataTypes.DATA,
        defaultValue:DataTypes.NOW
    },
    author_user_id:{
        type: DataTypes.INTEGER,
    },
    image:{
        type: DataTypes.STRING(255),
    },
    hashtags:{
        type: DataTypes.STRING(255),
    },
    comments:{
        type: DataTypes.TEXT,
        allowNull:false
    },
    level_id:{
        type: DataTypes.INTEGER,
        allowNull:false
    }
}, {
});
console.log(Post === sequelize.models.Post)