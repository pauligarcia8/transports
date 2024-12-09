import { NavLink } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul className="items-container">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? "active" : undefined}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/us" className={({ isActive }) => isActive ? "active" : undefined}>Us</NavLink>
          </li>
          <li>
            <NavLink to="/news" className={({ isActive }) => isActive ? "active" : undefined}>News</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : undefined}>Contact</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
