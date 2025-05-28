import { Link } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav
      style={{
        display: "flex",
        gap: "1rem",
        padding: "1rem",
        background: theme === "dark" ? "#333" : "#eee"
      }}
    >
      <Link to="/">Pokedex</Link>
      <Link to="/checkout">Checkout</Link>
      <button onClick={toggleTheme}>
        Theme: {theme === "light" ? "☀️" : "🌙"}
      </button>
    </nav>
  );
}
