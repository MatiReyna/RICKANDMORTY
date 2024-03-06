const { Favorite } = require('../DB_connection');

const deleteFav = async (req, res) => {
    try {
        const { id } = req.params;

        const favId = parseInt(id);  // Validar que id sea un número entero.
        if (isNaN(favId)) {
            return res.status(400).json({ error: 'El ID proporcionado no es válido' })
        }

        await Favorite.destroy({ where: { id } });  // Eliminar el favorito con el ID proporcionado.
        const allFavorites = await Favorite.findAll()

        return res.status(200).json({ message: 'Favorito eliminado correctamente', allFavorites })
    } catch (error) {
        console.error('Error al eliminar favorito:', error);
        return res.status(500).json({ error: 'Hubo un error al eliminar el favorito' });
    }
};

module.exports = {
    deleteFav
}