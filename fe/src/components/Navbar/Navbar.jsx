import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => Boolean(sessionStorage.getItem("token"))
  );

  const navigate = useNavigate();

  useEffect(() => {
    const syncLogin = () => {
      setIsLoggedIn(Boolean(sessionStorage.getItem("token")));
    };

    window.addEventListener("storage", syncLogin);

    return () => {
      window.removeEventListener("storage", syncLogin);
    };
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/">AuRide</Link>

      {isLoggedIn ? (
        <div>
          <Link to="/profile">Profile</Link>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <Link to="/login">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;