const authRoutes = require('./authRoutes');
const characterRoutes = require('./characterRoutes');
const favoriteRoutes = require('./favoriteRoutes');

const router = require('express').Router();

router.use('/auth', authRoutes);
router.use('/characters', characterRoutes);
router.use('/favorites', favoriteRoutes);

module.exports = router;