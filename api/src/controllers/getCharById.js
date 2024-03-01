const axios = require('axios');
const URL = 'https://rym2.up.railway.app/api/character/'

const getCharById = async (req, res) => {
    try {
        const { id } = req.params;

        const { data } = await axios.get(`${URL}${id}?key=pi-matireyna`)  // Hace una petición.
        let obj = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return obj.name ? res.status(200).json(obj) : res.status(500).send('Not Found')
    } catch (error) {
        res.status(500).send(error.message)
    }
};

module.exports = {
    getCharById
}