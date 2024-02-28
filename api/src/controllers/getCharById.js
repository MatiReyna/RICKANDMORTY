const axios = require('axios');
const URL = 'https://rym2.up.railway.app/api/character/'

const getCharById = (req, res) => {
    const { id } = req.params;

    axios.get(`${URL}${id}?key=pi-matireyna`)  // Hace una petición.
    .then((result) => result.data)  // Si tengo result me quedo con la data.
    .then((data) => {  // Por cada data creamos un objeto con esas propiedades.
        let obj = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        res.status(200).json(obj)
    })
    .catch((error) => res.status(500).send(error.message))
};

module.exports = {
    getCharById
}