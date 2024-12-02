const { Router } = require('express');
const { postUser } = require('../controllers/postUser');
const { login } = require('../controllers/login');

const router = Router();

router.post('/login', postUser);
router.get('/login', login);

module.exports = router;