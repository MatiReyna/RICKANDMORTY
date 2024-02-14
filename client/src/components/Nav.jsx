import SearchBar from './SearchBar';

const Nav = ({ onSearch, onAddRandom }) => {
    return (
        <div>
            <SearchBar onSearch={onSearch} />
            <button onClick={onAddRandom}>RANDOM</button>
        </div>
    )
};

export default Nav;