const axios = require('axios');

const getCharById = (res, id) => {
    axios.get(`https://rym2.up.railway.app/api/character/${id}?key=pi-matireyna`)  // Hace una petición.
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
        res.writeHead(200, { 'Content-type':'application/json' }).end(JSON.stringify(obj))  // Lo envia en forma de objeto.
    })
    .catch((error) => res.writeHead(500, { 'Content=type': 'text/plain' }).end(error.message))
};

modules.export = {
    getCharById
}