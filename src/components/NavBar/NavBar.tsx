import { NavLink } from "react-router-dom";
import { Nav } from "./NavBar.style";

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <NavLink
            to="/list"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Lista
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Registros
          </NavLink>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
