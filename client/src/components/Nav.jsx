import SearchBar from './SearchBar';

const Nav = () => {
    return (
        <div>
            <SearchBar onSearch={(characterID) => window.alert(characterID)} />
        </div>
    )
};

export default Nav;