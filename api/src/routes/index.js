const authRoutes = require('./authRoutes');
const characterRoutes = require('./characterRoutes');
const favoriteRoutes = require('./favoriteRoutes');

const router = require('express').Router();

router.use('/users', authRoutes);
router.use('/characters', characterRoutes);
router.use('/favorites', favoriteRoutes);

router.use((req, res) => {
    res.status(404).json({ error: 'Ruta no encontrada' })
});

module.exports = router;