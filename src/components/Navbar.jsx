import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="logo">SignRecognizer</div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/recognizer">Live</Link>
        <Link to="/upload">Upload</Link>
        <Link to="/history">History</Link>
        <Link to="/dictionary">Dictionary</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
