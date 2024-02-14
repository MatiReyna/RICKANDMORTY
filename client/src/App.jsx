import Nav from './components/Nav';
import Cards from './components/Cards';
import characters, { Rick } from './data';

import './App.css';

const App = () => {
  return (
    <div className='App'>
      <Nav />
      <Cards characters={characters} />
    </div>
  )
};

export default App;