import { Link } from 'react-router-dom';
import { HeaderStyle } from '../styles';

const Header = () => {

    return (
        <HeaderStyle>
          <h1>Movie Explorer App</h1>
          <nav>
            <Link to = "/">Home</Link>
            <Link to = "/top-rated">Top Rated</Link>
            <Link to = "/search">Search</Link>
          </nav>
        </HeaderStyle>
      );
}      
export default Header;