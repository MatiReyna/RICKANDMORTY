const { DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');

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
            allowNull: false,
            validate: {
                len: [6, 100]  // Contraseñas entre 6 y 100 caracteres.
            }
        }
    }, { timestamps: true,
        hooks: {
            beforeCreate: async (user) => {  // Hashing antes de guardar en la base de datos.
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            },
            beforeUpdate: async (user) => {  // Hashing después de actualizar en la base de datos.
                if (user.password) {
                    const salt = await bcrypt.genSalt(10);
                    user.password = await bcrypt.hash(user.password, salt);
                }
            }
        },
        defaultScope: {  // Oculta el campo password por defecto.
            attributes: { exclude: ['password'] }
        },
        scopes: {  // Define un scope para incluir el password si es necesario.
            withPassword: { attributes: {} }
        }
     })
};