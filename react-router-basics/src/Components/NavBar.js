import { NavLink } from 'react-router-dom';
import '.././App.css';

const NavBar = () => {
  return (
    <ul className="navbar">
      <li>
        <NavLink exact to="/" activeClassName="active">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/about" activeClassName="active">
          About
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName="active">
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
