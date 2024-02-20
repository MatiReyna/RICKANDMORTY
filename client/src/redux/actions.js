export const ADD_FAV = 'ADD_FAV';
export const REMOVE_FAV = 'REMOVE_FAV';

const addFav = (personaje) => {
    return {
        type: ADD_FAV,
        payload: personaje
    }
};

const removeFav = (id) => {
    return {
        type: REMOVE_FAV,
        payload: id
    }
};

module.exports = {
    addFav,
    removeFav
};