let myFavorites = [];  // Se declara con let ya que lo vamos a modificar.

const postFav = (req, res) => {
    const { character } = req.body;

    myFavorites.push(character);  // Agregamos el personaje que llego por body al arreglo.
    return res.status(200).json(myFavorites);  // Devolvemos el arreglo con los favoritos.  
};

const deleteFav = (req, res) => {
    const { id } = req.params;

    if (myFavorites.length) {
        myFavorites = myFavorites.filter(f => f.id !== id);
        return res.status(200).json(myFavorites);  // Hacemos que se pise.
    } else {
        return res.status(404).json({ error: 'No favorites found' });
    }
};

module.exports = {
    postFav,
    deleteFav
}

// En el filter me quedo con todos lo personajes que sean distintos al id pasado por params.