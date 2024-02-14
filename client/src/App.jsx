import Nav from './components/Nav';
import Cards from './components/Cards';
import { useState } from 'react';

import './App.css';

const App = () => {

  const [ characters, setCharacters ] = useState([]);  // Creación de un estado local.

  const example = {  // Personaje de ejemplo para que se agrege al estado local.
    id: 1,
    name: 'Rick Sanchez',
    status: 'Alive',
    species: 'Human',
    gender: 'Male',
    origin: {
      name: 'Earth (C-137)',
      url: 'https://rickandmortyapi.com/api/location/1',
    },
    image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  };

  const onSearch = () => {
    setCharacters([ ...characters, example ])
  };  // Setea el estado local con una copia de lo que ya tiene mas el nuevo personaje.

  return (
    <div className='App'>
      <Nav onSearch={onSearch} />
      <Cards characters={characters} />
    </div>
  )
};

export default App;