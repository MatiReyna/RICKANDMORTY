const initialState = {
    myFavorites: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: [ ...state.myFavorites, action.payload ]  // Para que no se pise el favorito.
            }  // Lo que da es una copia de lo que ya hay en ese arreglo mas el nuevo favorito.
        case 'REMOVE_FAV':
            const filteredFav = state.myFavorites.filter((favorite) => favorite.id !== Number(action.payload))
            return {
                ...state,
                myFavorites: filteredFav
            }
        default:
            return { ...state }
    }
};

export default reducer;

// En el filter me estoy quedando con todos los id diferentes al que pasaron por payload.