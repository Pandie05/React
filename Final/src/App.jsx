import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Pokedex from "./pages/Pokedex";
import Checkout from "./pages/Checkout";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Pokedex />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}
