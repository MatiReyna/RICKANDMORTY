import { useSelector, useDispatch } from 'react-redux';
import Card from './Card';
import { removeFav } from '../redux/actions';

const Favorites = () => {

    const myFavorites = useSelector((state) => state.myFavorites);  // Me traigo el estado global.

    const dispatch = useDispatch();

    const handleRemoveFavorite = (id) => {
        dispatch(removeFav(id))
    };

    return (
        <div>
            {
                myFavorites.map((character) => {
                    return (
                        <Card
                            key={character.id}
                            id={character.id}
                            name={character.name}
                            status={character.status}
                            species={character.species}
                            gender={character.gender}
                            origin={character.origin.name}
                            image={character.image}
                            onClose={() => handleRemoveFavorite(character.id)}
                        />
                    )
                })
            }
        </div>
    )
};

export default Favorites;