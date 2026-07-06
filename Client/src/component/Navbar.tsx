import { Link, useNavigate } from "react-router";
import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  const logoutHandler = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-amber-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide">
          🍫 ChocoStore
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">

          <Link
            to="/"
            className="hover:text-yellow-300 transition"
          >
            Home
          </Link>

          {token ? (
            <>
              <Link
                to="/create"
                className="hover:text-yellow-300 transition"
              >
                Add Chocolate
              </Link>

              <Link
                to="/my-chocolates"
                className="hover:text-yellow-300 transition"
              >
                My Chocolates
              </Link>

              <FaUserCircle size={28} />

              <button
                onClick={logoutHandler}
                className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="hover:text-yellow-300 transition"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg hover:bg-yellow-300"
              >
                Signup
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}

export default Navbar;