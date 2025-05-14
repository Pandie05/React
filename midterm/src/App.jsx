import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';

function App() {
  const toggleDarkMode = () => {
    document.body.classList.toggle('dark');

    const cards = document.querySelectorAll('.card');

    //document.cards.classList.toggle('dark');

    cards.forEach((card) => { card.classList.toggle('dark'); });

  };

  return (
    <>
      <Navbar />
      <div className="container">
        <button className="button" onClick={toggleDarkMode}>
          Toggle Dark Mode
        </button>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
