const { getCharById } = require('../controllers/getCharById');
const { postUser } = require('../controllers/postUser');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');
const { login } = require('../controllers/login');

const router = require('express').Router();

router.get('/character/:id', getCharById);

router.post('/login', postUser);
router.get('/login', login);

router.post('/fav', postFav);
router.delete('/fav/:id', deleteFav);

module.exports = router