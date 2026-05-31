import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav style={{ display: "flex", gap: "20px", padding: "15px", background: "#222", color: "white" }}>
      <h2>MyLogo</h2>

      <Link to="/" style={{ color: "white" }}>Products</Link>
      <Link to="/users" style={{ color: "white" }}>Users</Link>
      <Link to="/posts" style={{ color: "white" }}>Posts</Link>
    </nav>
  );
}

export default Navigation;
    