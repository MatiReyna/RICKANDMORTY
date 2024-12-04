const { Router } = require('express');
const { postUser } = require('../controllers/postUser');
const { login } = require('../controllers/login');

const router = Router();

router.post('/register', postUser);  // Ruta para registrar usuarios.
router.get('/login', login);  // Ruta para iniciar sesión.

module.exports = router;