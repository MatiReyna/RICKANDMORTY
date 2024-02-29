const initialState = {
    myFavorites: [],
    allCharacters: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_FAV':
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
            }
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: action.payload,
                allCharacters: action.payload
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

// En el filteredCharacters por cada character en su propiedad gender sea igual al genero pasado por payload.