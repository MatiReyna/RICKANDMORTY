import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import Card from './Card';
import { removeFav, filterCards, orderCards } from '../redux/actions';

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites);  // Me traigo el estado global.

    const dispatch = useDispatch();

    const [ aux, setAux ] = useState(false);

    const handleRemoveFavorite = (id) => {
        dispatch(removeFav(id))
    };

    const handleOrder = (event) => {
        dispatch(orderCards(event.target.value))
        setAux(!aux)
    };

    const handleFilter = (event) => {
        if (event.target.value === 'All') {  // No se aplica ningun filtro y mostramos todos los personajes.
            setAux(!aux)
        } else {
            dispatch(filterCards(event.target.value))  // Caso contrario se despacha la actions de filtrado.
        }
    };

    return (
        <div>
            <select onChange={handleOrder}>
                <option value='A'>ascendente</option>
                <option value='D'>descendente</option>
            </select>
            <select onChange={handleFilter}>
                <option value='All'>All</option>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
                <option value='Genderless'>Genderless</option>
                <option value='unknown'>unknown</option>
            </select>
            {
                myFavorites.map(({ id, name, status, species, gender, origin, image }) => {
                    return (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            status={status}
                            species={species}
                            gender={gender}
                            origin={origin}
                            image={image}
                            onClose={() => handleRemoveFavorite(character.id)}
                        />
                    )
                })
            }
        </div>
    )
};

export default Favorites;