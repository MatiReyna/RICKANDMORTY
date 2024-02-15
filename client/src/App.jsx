import Nav from './components/Nav';
import Cards from './components/Cards';
import { useState } from 'react';
import axios from 'axios';
import { Routes, Route } from 'react-router-dom';

import './App.css';

const App = () => {

  const [ characters, setCharacters ] = useState([]);  // Creación de un estado local.

  const onSearch = (id) => {  // Funcion que trae personajes de la API.

    const existingCharacter = characters.find((c) => c.id === Number(id));
    if (existingCharacter) {
      window.alert('El personaje ya se esta mostrando')
      return  // Corta la ejecucion y no agrega el repetido.
    };  // Verifica si el personaje ya se esta mostrando antes de buscarlo.

    axios(`https://rym2.up.railway.app/api/character/${id}?key=pi-matireyna`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [ ...oldChars, data ])
        } else {
          window.alert('¡No hay personajes con ese ID!')
        }
      }
    )
  };

  const onAddRandom = () => {  // Agrega un personaje random.
    const randomId = Math.floor(Math.random() * 1000) + 1  // Genera un ID aleatorio.
    axios(`https://rym2.up.railway.app/api/character/${randomId}?key=pi-matireyna`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [ ...oldChars, data ])
        } else {
          window.alert('¡No hay personajes con ese ID')
        }
      }
    )
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((c) => {
        return c.id !== Number(id)
      })
    )
  };

  return (
    <div className='App'>
      <Nav onSearch={onSearch} onAddRandom={onAddRandom} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  )
};

export default App;