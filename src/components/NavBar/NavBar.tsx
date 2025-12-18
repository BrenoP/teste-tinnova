import { Link } from "react-router-dom";

function NavBar() {
  return ( 
    <nav>
      <ul>
        <li><Link to="/list">Lista</Link></li>
        <li><Link to="/register">Registrar</Link></li>
      </ul>
    </nav>
  );
}

export default NavBar;