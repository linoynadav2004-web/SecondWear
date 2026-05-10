import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../data/CartContext';

const CartPage = () => {
  const { cart, removeFromCart } = useCart();
  const subtotal = cart.reduce((acc, item) => acc + item.price, 0);
  const shipping = cart.length > 0 ? (subtotal > 300 ? 0 : 30) : 0;

  return (
    <div className="container" style={styles.page}>
      <h1 style={styles.title}>Your Shopping Bag ({cart.length})</h1>
      
      {cart.length === 0 ? (
        <div style={styles.empty}>
          <ShoppingBag size={48} color="var(--accent-brown)" />
          <p style={styles.emptyText}>Your bag is currently empty.</p>
          <Link to="/" style={styles.shopLink}>
            Explore Collections <ArrowRight size={16} />
          </Link>
        </div>
      ) : (
        <div style={styles.content}>
          <div style={styles.itemsList}>
            {cart.map((item, index) => (
              <div key={`${item.id}-${index}`} style={styles.cartItem}>
                <img src={item.image} alt={item.name} style={styles.itemImage} />
                <div style={styles.itemInfo}>
                  <span style={styles.itemBrand}>{item.brand}</span>
                  <h3 style={styles.itemName}>{item.name}</h3>
                  <p style={styles.itemPrice}>₪{item.price}</p>
                </div>
                <button onClick={() => removeFromCart(item.id)} style={styles.removeButton}>
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
          </div>

          <div style={styles.summaryCard}>
            <h2 style={styles.summaryTitle}>Order Summary</h2>
            <div style={styles.summaryRow}>
              <span>Subtotal</span>
              <span>₪{subtotal}</span>
            </div>
            <div style={styles.summaryRow}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'Free' : `₪${shipping}`}</span>
            </div>
            <div style={styles.totalRow}>
              <span>Total</span>
              <span>₪{subtotal + shipping}</span>
            </div>
            <button style={styles.checkoutButton}>Proceed to Checkout</button>
          </div>
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: '3rem 24px',
    minHeight: '60vh',
  },
  title: {
    fontSize: '2rem',
    marginBottom: '2.5rem',
  },
  content: {
    display: 'grid',
    gridTemplateColumns: '1.4fr 1fr',
    gap: '3rem',
    alignItems: 'start',
  },
  itemsList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '1.2rem',
    backgroundColor: 'var(--white)',
    padding: '1.2rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
  },
  itemImage: {
    width: '80px',
    height: '100px',
    objectFit: 'cover',
    borderRadius: '6px',
  },
  itemInfo: {
    flex: 1,
  },
  itemBrand: {
    fontSize: '0.75rem',
    color: 'var(--accent-brown)',
    fontWeight: '700',
    textTransform: 'uppercase',
  },
  itemName: {
    fontSize: '1rem',
    margin: '0.2rem 0',
    fontWeight: '500',
  },
  itemPrice: {
    fontWeight: '700',
    color: 'var(--primary-brown)',
    fontSize: '0.95rem',
  },
  removeButton: {
    color: '#999',
    padding: '8px',
  },
  summaryCard: {
    backgroundColor: 'var(--white)',
    padding: '2rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
    border: '1px solid var(--secondary-cream)',
  },
  summaryTitle: {
    fontSize: '1.2rem',
    marginBottom: '1.5rem',
  },
  summaryRow: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
    color: 'var(--text-muted)',
    fontSize: '0.95rem',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: '700',
    fontSize: '1.1rem',
    marginTop: '1.5rem',
    borderTop: '1px solid var(--secondary-cream)',
    paddingTop: '1.5rem',
    color: 'var(--text-main)',
  },
  checkoutButton: {
    width: '100%',
    backgroundColor: 'var(--primary-brown)',
    color: 'var(--white)',
    padding: '1rem',
    borderRadius: 'var(--border-radius)',
    fontSize: '1rem',
    fontWeight: '700',
    marginTop: '2rem',
  },
  empty: {
    textAlign: 'center',
    padding: '4rem 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
  },
  emptyText: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
  },
  shopLink: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--accent-brown)',
    fontWeight: '700',
    fontSize: '1rem',
  }
};

export default CartPage;
