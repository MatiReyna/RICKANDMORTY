import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addFav, removeFav } from '../redux/actions';  // Traemos las funciones creadas en las actions.
import { useState, useEffect } from 'react';

const Card = ({ id, name, status, species, gender, origin, image, onClose }) => {

    const dispatch = useDispatch();

    const myFavorites = useSelector((state) => state.myFavorites);  // Tengo el estado global.

    const [ isFav, setIsFav ] = useState(false);  // Estado local para los favoritos.

    const handleFavorite = () => {
        isFav ? dispatch(removeFav(id)) : dispatch(addFav({ id, name, status, species, gender, origin, image, onClose }))
        setIsFav(!isFav)
    };

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true)
            }
        })
    }, [myFavorites]);

    return (
        <div>
            {
                isFav ? (<button onClick={handleFavorite}>❤️</button>) : (<button onClick={handleFavorite}>🤍</button>)
            }

            <button onClick={() => { onClose(id) }}>X</button>

            <Link to={`/detail/${id}`}>
                <h2>{name}</h2>
            </Link>

            <h2>{status}</h2>
            <h2>{species}</h2>
            <h2>{gender}</h2>
            <h2>{origin}</h2>
            <img src={image} alt={name} />
        </div>
    )
};

export default Card;