const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: [ ...state.myFavorites, action.payload ],  // Para que no se pise el favorito.
                allCharacters: [ ...state.allCharacters, action.payload ]
            }  // Lo que da es una copia de lo que ya hay en ese arreglo mas el nuevo favorito.
        case 'REMOVE_FAV':
            const filteredFav = state.myFavorites.filter((favorite) => favorite.id !== Number(action.payload));
            return {
                ...state,
                myFavorites: filteredFav
            }
        case 'FILTER':
            const genderToFilter = action.payload;  // Me quedo con el action que seria el genero a filtrar.
            const filteredCharacters = state.allCharacters.filter((charcater) => charcater.gender === genderToFilter);
            return {
                ...state,
                myFavorites: filteredCharacters
            }
        case 'ORDER':
            const order = action.payload;  // Me quedo con el action que seria el orden -> A o D.
            const orderedCharacters = state.myFavorites.slice().sort((a, b) => {
                if (order === 'A') {
                    return a.id - b.id
                } else if (order === 'D') {
                    return b.id - a.id
                } else {
                    return 0
                }
            });
            return {
                ...state,
                myFavorites: orderedCharacters
            }
        default:
            return { ...state }
    }
};

export default reducer;

// En el filteredFav me estoy quedando con todos los id diferentes al que pasaron por payload.
// En el filteredCharacters por cada character en su propiedad gender sea igual al genero pasado por payload.