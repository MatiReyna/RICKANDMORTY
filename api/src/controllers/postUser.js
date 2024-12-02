const { User } = require('../DB_connection');

const postUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Datos recibidos:', req.body);

        if (!email || !password) {  // Verificar si los campos están presentes.
            return res.status(400).json({ error: 'Faltan datos' });
        } 

        const existingUser = await User.findOne({ where: { email } })  // Verificar si el usuario ya existe.
        if (existingUser) {
            return res.status(409).json({ error: 'Este usuario ya existe' });
        }

        const newUser = await User.create({ where: { email, password } });  // Crear un nuevo usuario.
        return res.status(201).json({ id: newUser.id, email: newUser.email });
    } catch (error) {
        console.error('Error al crear usuario:', error);
        return res.status(500).json({ error: 'Hubo un error al crear el usuario' });
    }
};

module.exports = {
    postUser
}