import { mockProducts } from '../data/mockProducts';
import ProductCard from '../components/ProductCard';

const LandingPage = () => {
  return (
    <div style={styles.page}>
      <header style={styles.hero}>
        <div className="container">
          <h1 style={styles.heroTitle}>Give Fashion a Second Life</h1>
          <p style={styles.heroSubtitle}>Curated vintage and pre-loved pieces for your unique style. Sustainably sourced, carefully selected.</p>
        </div>
      </header>

      <section className="container" style={styles.gridSection}>
        <div style={styles.gridHeader}>
          <h2 style={styles.sectionTitle}>Featured Collections</h2>
          <div style={styles.filterBar}>
            <span style={styles.activeFilter}>All Items</span>
            <span>New In</span>
            <span>Outerwear</span>
            <span>Dresses</span>
          </div>
        </div>
        
        <div style={styles.grid}>
          {mockProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

const styles = {
  page: {
    paddingBottom: '4rem',
  },
  hero: {
    backgroundColor: 'var(--secondary-cream)',
    padding: '4rem 0',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  heroTitle: {
    fontSize: '2.5rem', // Reduced from 3.5rem
    marginBottom: '0.75rem',
    fontWeight: '700',
  },
  heroSubtitle: {
    fontSize: '1rem', // Reduced from 1.2rem
    color: 'var(--text-muted)',
    maxWidth: '500px',
    margin: '0 auto',
    lineHeight: '1.5',
  },
  gridSection: {
    padding: '0 24px',
  },
  gridHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    borderBottom: '1px solid var(--secondary-cream)',
    paddingBottom: '1rem',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  sectionTitle: {
    fontSize: '1.5rem',
  },
  filterBar: {
    display: 'flex',
    gap: '1.5rem',
    fontSize: '0.85rem',
    fontWeight: '600',
    color: 'var(--text-muted)',
  },
  activeFilter: {
    color: 'var(--primary-brown)',
    textDecoration: 'underline',
    textUnderlineOffset: '4px',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', // Showing more items per row
    gap: '1.5rem', // Reduced gap
  },
};

export default LandingPage;
