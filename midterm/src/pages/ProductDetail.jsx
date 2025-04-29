import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Button from '../components/Button';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useFetch('/products.json');

  if (loading) return <p>Loading product details...</p>;

  const product = data.products.find((p) => p.id.toString() === id);

  if (!product) return <p>Product not found!</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <img src={product.image} alt={product.title} style={{ width: '300px', borderRadius: '8px' }} />
      <p><strong>Description:</strong> {product.description}</p>
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <Button onClick={() => navigate(-1)}>Back</Button>
    </div>
  );
};

export default ProductDetail;
