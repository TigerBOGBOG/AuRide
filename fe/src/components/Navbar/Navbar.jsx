import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchUser() {
      const token = sessionStorage.getItem("token");

      if (!token) {
        setUser(null);
        return;
      }

      try {
        const response = await fetch(
          "http://localhost:3000/api/auth/test-auth",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          sessionStorage.removeItem("token");
          setUser(null);
          return;
        }

        const data = await response.json();
        setUser(data.user);
      } catch (error) {
        console.error("Fetch user error:", error);
        setUser(null);
      }
    }

    fetchUser();
  }, []);

  function handleLogout() {
    sessionStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  }

  return (
    <nav>
      <Link to="/">AuRide</Link>

      {user?.role === "USER" && (
        <>
          <Link to="/home">Home</Link>
          <Link to="/book-ride">Book Ride</Link>
          <Link to="/my-rides">My Rides</Link>
        </>
      )}

      {user?.role === "DRIVER" && (
        <>
          <Link to="/available-rides">Available Rides</Link>
          <Link to="/my-jobs">My Jobs</Link>
        </>
      )}

      {user?.role === "ADMIN" && (
        <>
          <Link to="/admin">Dashboard</Link>
          <Link to="/admin/users">Users</Link>
          <Link to="/admin/rides">Rides</Link>
        </>
      )}

      {user ? (
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