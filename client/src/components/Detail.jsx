import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Detail = () => {

    const { id } = useParams();  // Obtenemos el ID que llega por Params.

    const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`)  // Actializa el ID segun la dependencia.
            .then(({ data }) => {
                if (data.name) {
                    setCharacter(data)
                } else {
                    window.alert('No hay personajes con ese ID')
                }
            }
        )
        return setCharacter({});
    }, [id]);  // Al estar en el arreglo de dependencia quiere decir a que va a estar atento a cambios.

    return (
        <div>
            <h1>{character.name && character.name}</h1>
            <br />
            <h2>STATUS | {character.status && character.status}</h2>
            <h2>GENDER | {character.gender && character.gender}</h2>
            <h2>SPECIE | {character.species && character.species}</h2>
            <h2>ORIGIN | {character.origin?.name && character.origin?.name}</h2>
            <img src={character.image && character.image} alt={character.name} />

            <Link to='/home'>
                <button>Volver</button>
            </Link>
        </div>
    )
};

export default Detail;

// Hacemos un condicional para que React no se estrese.
// Lo que le decimos es que busque tranquilo y cuando tenga la información que la muestre.