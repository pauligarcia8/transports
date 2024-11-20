import { Link } from "react-router-dom";
import '../../styles/components/layout/Nav.css';

const Nav = (props) => {
  return (
    <nav>
      <div>
        <ul className="items-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/us">Us</Link>
          </li>
          <li>
            <Link to="/news">News</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
