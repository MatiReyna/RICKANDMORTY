import SearchBar from './SearchBar';
import { Link, useLocation } from 'react-router-dom';

import styles from './styles/Nav.module.css';

const Nav = ({ onSearch, onAddRandom, logout }) => {

    const location = useLocation();

    return (
        <div className={styles.navContainer}>
            <SearchBar onSearch={onSearch} />
            <div className={styles.navButtons}>
                <button onClick={onAddRandom}>RANDOM</button>
            </div>
            <div className={styles.navLinks}>
                <Link to='/about' className={location.pathname === '/about' ? styles.activeLink : ''}>
                    <button>About</button>
                </Link>

                <Link to='/home' className={location.pathname === '/home' ? styles.activeLink : ''}>
                    <button>Home</button>
                </Link>

                <Link to='/favorites' className={location.pathname === '/favorites' ? styles.activeLink : ''}>
                    <button>Favorites</button>
                </Link>
            </div>
            <div className={styles.navButtons}>
                <button onClick={logout}>Log out</button>
            </div>
        </div>
    )
};

export default Nav;