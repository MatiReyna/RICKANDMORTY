import { useState } from 'react';

import styles from './styles/SearchBar.module.css';

const SearchBar = ({ onSearch }) => {

    const [ id, setId ] = useState('');

    const [ error, setError ] = useState('');

    const handleChange = (event) => {
        setId(event.target.value)
        setError('')
    };  // Setea el estado local con lo que se escriba en el input.

    const handleSearch = () => {
        if (!/^\d+$/.test(id)) {
            setError('El ID debe ser un número entero')
            return
        }
        onSearch(id)  // Invoca la función onSearch con el ID actual.
        setId('')  // Limpia el valor del input.
    };

    const handleEnterPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch()
        }
    };

    return (
        <div className={styles.searchContainer}>
            <input type='search' value={id} onChange={handleChange} onKeyPress={handleEnterPress} placeholder='ID del personaje...' className={styles.searchInput} />
            <button onClick={handleSearch} className={styles.searchButton}>
                <ion-icon name="search"></ion-icon>
                Agregar
            </button>
            { error && <div className={styles.errorMessage}>{error}</div> }
        </div>
    )
};

export default SearchBar;

// Se pone una arrow function a onSearch para que no se ejecute sola.