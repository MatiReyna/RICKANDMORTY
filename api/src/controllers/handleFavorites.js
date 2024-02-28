let myFavorites = [];  // Se declara con let ya que lo vamos a modificar.

const postFav = (req, res) => {
    const { character } = req.body;

    myFavorites.push(character);  // Agregamos el personaje que llego por body al arreglo.
    return res.status(200).json(myFavorites);  // Devolvemos el arreglo con los favoritos.  
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    const myFavorite = myFavorites.filter(f => f.id !== Number(id));
    return res.status(200).json(myFavorite);  // Hacemos que se pise.
};

module.exports = {
    postFav,
    deleteFav
}

// En el filter me quedo con todos lo personajes que sean distintos al id pasado por params.