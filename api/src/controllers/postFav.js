const { Favorite } = require('../DB_connection');

const postFav = async (req, res) => {
    try {
        const { name, origin, status, image, species, gender } = req.body;
        if (!name || !origin || !status || !image || !species || !gender) {
            return res.status(400).json({ error: 'Faltan datos' })
        }

        await Favorite.findOrCreate({ where: { name, origin, status, image, species, gender } })

        const allFavorites = await Favorite.findAll()
        return res.status(201).json(allFavorites)
    } catch (error) {
        console.error('Error al crear favorito:', error);
        return res.status(500).json({ error: 'Hubo un error al crear el favorito' })
    }
};

module.exports = {
    postFav
}