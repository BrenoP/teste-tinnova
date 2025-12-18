import { Link } from "react-router-dom";
import { Nav } from "./NavBar.style";

function NavBar() {
  return ( 
    <Nav>
      <ul>
        <li><Link to="/list">Lista</Link></li>
        <li><Link to="/register">Registros</Link></li>
      </ul>
    </Nav>
  );
}

export default NavBar;