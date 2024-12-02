const { Router } = require('express');
const { getCharById } = require('../controllers/getCharById');

const router = Router();

router.get('/:id', getCharById);

module.exports = router;