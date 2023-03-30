import "./navbar.css";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
const Navbar = () => {
  const { auth } = useAuth();
  console.log(auth.email)
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <span className="logo">FULL BOOKING</span>
        </Link>
        {auth.email ? auth.email : (
          <div className="navItems">
            <button className="navButton">Register</button>
            <button className="navButton">Login</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;