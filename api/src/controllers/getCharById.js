const axios = require('axios');
const URL = 'https://rym2.up.railway.app/api/character/'

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const charId = parseInt(id);  // Validar que id sea un número entero.
        if (isNaN(charId)) {
            return res.status(400).json({ error: 'El ID proporcionado no es válido' })
        }

        const { data } = await axios.get(`${URL}${id}?key=pi-matireyna`)  // Hace una petición.
        if (!data || !data.id) return res.status(404).send('Personaje no encontrado')  // Verificar si se encontró el personaje.
        let obj = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return res.status(200).json(obj)
    } catch (error) {
        console.error('Error al obtener información del personaje:', error);
        res.status(500).json({ error: 'Hubo un error al obtener información del personaje' })
    }
};

module.exports = {
    getCharById
}