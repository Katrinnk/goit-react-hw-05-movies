import { Nav } from './Header.styled';

const { NavLink } = require('react-router-dom');

const Header = () => {
  return (
    <Nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="navbar-nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </div>
    </Nav>
  );
};

export default Header;
