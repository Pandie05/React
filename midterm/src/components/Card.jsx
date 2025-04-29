import { Link } from 'react-router-dom';

const Card = ({ product }) => {
  return (
    <div className="card">
      <Link to={`/products/${product.id}`}>
        <img src={product.image} alt={product.title} className="thumbnail" />
        <h3>{product.title}</h3>
      </Link>
    </div>
  );
};

export default Card;
