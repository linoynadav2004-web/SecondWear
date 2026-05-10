import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockProducts';
import { ShoppingCart, ArrowLeft, ShieldCheck, Truck } from 'lucide-react';
import { useCart } from '../data/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = mockProducts.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>Product not found. <Link to="/">Go back</Link></div>;
  }

  return (
    <div className="container" style={styles.page}>
      <Link to="/" style={styles.backButton}>
        <ArrowLeft size={18} /> Back to Shop
      </Link>
      
      <div style={styles.content}>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        
        <div style={styles.detailsSection}>
          <span style={styles.brand}>{product.brand}</span>
          <h1 style={styles.name}>{product.name}</h1>
          <p style={styles.price}>₪{product.price}</p>
          
          <div style={styles.divider} />
          
          <div style={styles.infoBox}>
            <p style={styles.description}>
              This authentic {product.name.toLowerCase()} from {product.brand} is in excellent condition. 
              Made with high-quality materials, it's a perfect addition to a sustainable wardrobe.
              Every purchase at SecondWear supports circular fashion.
            </p>
          </div>

          <div style={styles.benefits}>
            <div style={styles.benefitItem}>
              <ShieldCheck size={18} color="var(--accent-brown)" />
              <span>Authenticity Guaranteed</span>
            </div>
            <div style={styles.benefitItem}>
              <Truck size={18} color="var(--accent-brown)" />
              <span>Free Shipping on orders over ₪300</span>
            </div>
          </div>

          <button onClick={() => addToCart(product)} style={styles.addButton}>
            <ShoppingCart size={20} /> Add to Bag
          </button>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '2rem 24px',
  },
  backButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-muted)',
    marginBottom: '2rem',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: 'minmax(300px, 1.2fr) 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  imageSection: {
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    backgroundColor: 'var(--white)',
  },
  image: {
    width: '100%',
    height: 'auto',
    display: 'block',
    maxHeight: '600px',
    objectFit: 'cover',
  },
  detailsSection: {
    padding: '1rem 0',
  },
  brand: {
    fontSize: '0.9rem',
    color: 'var(--accent-brown)',
    fontWeight: '700',
    textTransform: 'uppercase',
    letterSpacing: '1.5px',
  },
  name: {
    fontSize: '2rem', // Reduced from 2.5rem
    margin: '0.5rem 0 0.8rem 0',
  },
  price: {
    fontSize: '1.5rem', // Reduced from 1.8rem
    fontWeight: '700',
    color: 'var(--primary-brown)',
  },
  divider: {
    height: '1px',
    backgroundColor: 'var(--secondary-cream)',
    margin: '1.5rem 0',
  },
  infoBox: {
    marginBottom: '1.5rem',
  },
  description: {
    color: 'var(--text-muted)',
    lineHeight: '1.6',
    fontSize: '0.95rem',
  },
  benefits: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.8rem',
    marginBottom: '2rem',
  },
  benefitItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.7rem',
    fontSize: '0.85rem',
    color: 'var(--text-main)',
  },
  addButton: {
    width: '100%',
    backgroundColor: 'var(--primary-brown)',
    color: 'var(--white)',
    padding: '1rem',
    borderRadius: 'var(--border-radius)',
    fontSize: '1rem',
    fontWeight: '600',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    boxShadow: '0 4px 12px rgba(74, 55, 40, 0.12)',
  },
};

export default ProductPage;
