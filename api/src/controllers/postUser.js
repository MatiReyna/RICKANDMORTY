const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email && !password) return res.status(400).send('Faltan datos')

        const existingUser = await User.findOne({ where: { email } })  // Verificar si ya existe un usuario con el mismo correo electrónico.
        if (existingUser) {
            return res.status(409).send('Este usuario ya existe');
        }

        const newUser = await User.findOrCreate({ where: { email, password } });  // Crear un nuevo usuario.
        return res.status(200).json(newUser)
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).send('Hubo un error al crear el usuario')
    }
};

module.exports = {
    postUser
}