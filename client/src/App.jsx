import Nav from './components/Nav';
import Cards from './components/Cards';
import About from './components/About';
import Detail from './components/Detail';
import Form from './components/Form';
import Favorites from './components/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

import './App.css';

const App = () => {

  const { pathname } = useLocation();  // Con esto saco donde el usuario esta parado.

  const [ characters, setCharacters ] = useState([]);  // Creación de un estado local.

  const navigate = useNavigate();
  const EMAIL = 'matiireyna@hotmail.com';
  const PASSWORD = 'hola123';

  const [ access, setAccess ] = useState(false);  // Estado local para ingresar a la página.

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {  // Si los datos ingresados son correctos...
      setAccess(true)  // Le da permiso a acceder a la página.
      navigate('/home')  // Y lo lleva al home.
    } else {
      window.alert('Credenciales incorrectas. Por favor, inténtelo de nuevo.')
    }
  };

  const logout = () => {
    setAccess(false)
    navigate('/')
  };

  useEffect(() => {
    !access && navigate('/')  // Cuando se monte y no tengo el estado local, se muestra el Form.
  }, [access]);

  const onSearch = (id) => {  // Funcion que trae personajes de la API.

    const existingCharacter = characters.find((c) => c.id === Number(id));
    if (existingCharacter) {
      window.alert('El personaje ya se esta mostrando')
      return  // Corta la ejecucion y no agrega el repetido.
    };  // Verifica si el personaje ya se esta mostrando antes de buscarlo.

    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    const randomId = Math.floor(Math.random() * 826) + 1  // Genera un ID aleatorio.
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

      { pathname !== '/' && <Nav onSearch={onSearch} onAddRandom={onAddRandom} logout={logout} /> }

      <Routes>
        <Route path='/' element={ <Form login={login} /> } />
        <Route path='/home' element={ <Cards characters={characters} onClose={onClose} /> } />
        <Route path='/about' element={ <About /> } />
        <Route path='/detail/:id' element={ <Detail /> } />
        <Route path='/favorites' element={ <Favorites /> } />
      </Routes>
    </div>
  )
};

export default App;

// Lo que hacemos con ese pathname es ver donde estaubicado el usuario.
// Si es diferente a '/' osea que es true se muestra el Nav.