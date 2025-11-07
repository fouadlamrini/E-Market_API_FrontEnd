import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex justify-center gap-6">
      <Link to="/" className="hover:text-blue-500">Home</Link>
      <Link to="/login" className="hover:text-blue-500">Login</Link>
      <Link to="/register" className="hover:text-blue-500">Register</Link>
    </nav>
  );
}

export default Navbar;
