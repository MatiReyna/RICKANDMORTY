import SearchBar from './SearchBar';
import { Link } from 'react-router-dom';

const Nav = ({ onSearch, onAddRandom }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={onAddRandom}>RANDOM</button>
            
            <Link to='/about'>
                <button>About</button>
            </Link>

            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
};

export default Nav;