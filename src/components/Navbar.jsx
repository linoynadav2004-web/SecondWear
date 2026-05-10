import { Link } from 'react-router-dom';
import { ShoppingBag, PlusCircle, Home, Heart } from 'lucide-react';

const Navbar = () => {
  return (
    <nav style={styles.nav}>
      <div className="container" style={styles.container}>
        <Link to="/" style={styles.logo}>SecondWear</Link>
        <div style={styles.links}>
          <Link to="/" style={styles.link}><Home size={20} /> <span>Home</span></Link>
          <Link to="/add-product" style={styles.link}><PlusCircle size={20} /> <span>Sell</span></Link>
          <Link to="/cart" style={styles.link}><ShoppingBag size={20} /> <span>Cart</span></Link>
        </div>
      </div>
    </nav>
  );
};

const styles = {
  nav: {
    backgroundColor: 'var(--white)',
    borderBottom: '1px solid var(--secondary-cream)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
    boxShadow: 'var(--shadow)',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: 'var(--primary-brown)',
  },
  links: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    color: 'var(--text-muted)',
    fontWeight: '500',
    fontSize: '0.9rem',
    transition: 'var(--transition)',
  },
};

export default Navbar;
