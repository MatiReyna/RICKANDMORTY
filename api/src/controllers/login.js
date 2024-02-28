const users = require('../utils/users');

const login = (req, res) => {
    const { email, password } = req.query;

    const userFind = users.find(user => user.email === email && user.password === password);

    return userFind ? res.status(200).json({ access: true }) : res.status(404).json({ access: false })
};

module.exports = {
    login
}

// Con el find estoy buscando al usuario que coincida su email y password que me llegan por query.