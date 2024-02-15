import { useState } from 'react';

const SearchBar = ({ onSearch }) => {

    const [ id, setId ] = useState('');

    const handleChange = (event) => {
        setId(event.target.value)
    };  // Setea el estado local con lo que se escriba en el input.

    return (
        <div>
            <input type='search' value={id} onChange={handleChange} placeholder='El ID del personaje...' />
            <button onClick={() => { onSearch(id) }}>Agregar</button>
        </div>
    )
};

export default SearchBar;

// Se pone una arrow function a onSearch para que no se ejecute sola.