import { Link } from "react-router-dom";

const Navbar = () => (
  <nav style={styles.nav}>
    <h1 style={styles.title}>Blog App</h1>
    <div style={styles.links}>
      <Link style={styles.link} to="/">
        Home
      </Link>
      <Link style={styles.link} to="/new">
        Create Blog
      </Link>
      <Link style={styles.link} to="/login">
        Login
      </Link>
      <Link style={styles.link} to="/signup">
        Signup
      </Link>
    </div>
  </nav>
);

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#282c34",
    color: "white",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    margin: 0,
  },
  links: {
    display: "flex",
    gap: "15px",
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "18px",
  },
};

export default Navbar;
