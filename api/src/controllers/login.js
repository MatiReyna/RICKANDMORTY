const { User } = require('../DB_connection');

const login = async (req, res) => {
    try {
        const { email, password } = req.query;
        if (!email || !password) return res.status(401).send('Faltan datos')

        const user = await User.findOne({ where: { email } })
        if (!user) return res.status(404).send('Usuario no encontrado')
        if (user.password !== password) return res.status(403).send('Contraseña incorrecta')

        return res.json({ access: true })
    } catch (error) {
        console.error('Error en el proceso de inicio de sesión:', error);
        return res.status(500).send('Hubo un error en el proceso de inicio de sesión')
    }
};

module.exports = {
    login
}