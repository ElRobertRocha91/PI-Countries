const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Activities', {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        difficulty: {
            type: DataTypes.ENUM('1', '2', '3', '4', '5')
        },
        duration: {
            type: DataTypes.STRING
        },
        season: {
            type: DataTypes.ENUM('Summer', 'Fall', 'Winter', 'Spring')
        }
    },{
        timestamps: false
    });
};