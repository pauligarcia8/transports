import { Link } from "react-router-dom";

const Nav = (props) => {
    return (
        <nav>
            <div>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/us">Us</Link></li>
                <li><Link to="/news">News</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </div>
        </nav>
    )
}

export default Nav;