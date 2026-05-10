import { Heart, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../data/CartContext';

const ProductCard = ({ product }) => {
  const [isLiked, setIsLiked] = useState(false);
  const { addToCart } = useCart();

  return (
    <div style={styles.card}>
      <div style={styles.imageWrapper}>
        <Link to={`/product/${product.id}`} style={styles.imageLink}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </Link>
        <div style={styles.overlay}>
          <button 
            onClick={() => setIsLiked(!isLiked)} 
            style={{ ...styles.iconButton, color: isLiked ? '#E74C3C' : 'var(--text-main)' }}
          >
            <Heart size={18} fill={isLiked ? '#E74C3C' : 'none'} />
          </button>
          <button 
            onClick={() => addToCart(product)} 
            style={styles.iconButton}
          >
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
      <Link to={`/product/${product.id}`} style={styles.content}>
        <span style={styles.brand}>{product.brand}</span>
        <h3 style={styles.name}>{product.name}</h3>
        <p style={styles.price}>₪{product.price}</p>
      </Link>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: 'var(--white)',
    borderRadius: 'var(--border-radius)',
    overflow: 'hidden',
    boxShadow: 'var(--shadow)',
    transition: 'var(--transition)',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  imageWrapper: {
    position: 'relative',
    width: '100%',
    paddingTop: '125%', // 4:5 aspect ratio
    overflow: 'hidden',
    backgroundColor: 'var(--secondary-cream)',
  },
  imageLink: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.5s ease',
  },
  overlay: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  iconButton: {
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    color: 'var(--text-main)',
  },
  content: {
    padding: '1rem',
    textAlign: 'center',
    flex: 1,
    display: 'block',
  },
  brand: {
    display: 'block',
    fontSize: '0.7rem',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    color: 'var(--accent-brown)',
    fontWeight: '700',
    marginBottom: '0.25rem',
  },
  name: {
    fontSize: '0.9rem',
    fontWeight: '500',
    marginBottom: '0.4rem',
    color: 'var(--text-main)',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  price: {
    fontSize: '1rem',
    fontWeight: '700',
    color: 'var(--primary-brown)',
  },
};

export default ProductCard;
