import { usePokemon } from "../hooks/usePokemon";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";
import type { AppDispatch } from "../store";
import { useTheme } from "../context/ThemeContext";

export default function Pokedex() {
  const { pokemon, loading } = usePokemon();
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useTheme();

  if (loading) return <p>Loading...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>Pokedex</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        {pokemon.map((poke) => (
          <div
            key={poke.id}
            style={{
              border: theme === "dark" ? "1px solid #444" : "1px solid #ccc",
              padding: "1rem",
              borderRadius: "8px",
              width: "150px",
              textAlign: "center",
              background: theme === "dark" ? "#1a1a1a" : "#fff",
              color: theme === "dark" ? "#fff" : "#000"
            }}
          >
            <img src={poke.image} alt={poke.name} width="80" height="80" />
            <h3>{poke.name}</h3>
            <p>${poke.price}</p>
            <button onClick={() => dispatch(addToCart(poke))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}
