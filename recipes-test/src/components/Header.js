
import SearchBar from './SearchBar.js';
const Header = ({ onSearch }) => {
  return (
    <div>
        <SearchBar onSearch={onSearch} />
    </div>
  );
};
export default Header;