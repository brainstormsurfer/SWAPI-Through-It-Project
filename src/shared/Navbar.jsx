// import { NavLink, useLocation, Link } from "react-router-dom";

const Navbar = () => {
  // const location = useLocation();
  // const isHomeRoute = location.pathname === "/";
  return (
        <nav>
          <img
            src={logo}
            alt="logo"
            className="logo"
          />
          <ul>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/work"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Work
              </NavLink>
            </li>
            <li>
              <Link
                to="/about"
                className={({ isActive }) => (isActive ? "active" : undefined)}
              >
                Connect
              </Link>
            </li>
          </ul>
        </nav>
    
    
  );
};

export default Navbar;
