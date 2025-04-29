import useFetch from '../hooks/useFetch';
import Card from '../components/Card';

const Products = () => {
  const { data, loading } = useFetch('/products.json');

  if (loading) return <p>Loading products...</p>;

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
      {data.products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
