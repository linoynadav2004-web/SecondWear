const Footer = () => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.container}>
        <p style={styles.text}>&copy; 2026 SecondWear. Sustainable Fashion for Everyone.</p>
        <div style={styles.socials}>
          <span style={styles.link}>Instagram</span>
          <span style={styles.link}>Pinterest</span>
        </div>
      </div>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: 'var(--primary-brown)',
    color: 'var(--white)',
    padding: '3rem 0',
    marginTop: '4rem',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '1rem',
  },
  text: {
    fontSize: '0.9rem',
    opacity: 0.8,
  },
  socials: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    fontSize: '0.9rem',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
};

export default Footer;
