const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,  // Asegura que cada correo electrónico sea único.
            validate: {
                isEmail: true  // Validación adicional del correo electrónico.
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, { timestamps: false })
};