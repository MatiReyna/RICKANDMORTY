const { Router } = require('express');
const { postFav } = require('../controllers/postFav');
const { deleteFav } = require('../controllers/deleteFav');

const router = Router();

router.post('/', postFav);
router.delete('/:id', deleteFav);

module.exports = router;