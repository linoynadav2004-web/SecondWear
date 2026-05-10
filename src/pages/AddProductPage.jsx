import { useState } from 'react';
import { Camera, Upload, AlertCircle } from 'lucide-react';

const AddProductPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    price: '',
    category: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Product listing submitted for review!');
  };

  return (
    <div className="container" style={styles.page}>
      <div style={styles.header}>
        <h1 style={styles.title}>Sell Your Item</h1>
        <p style={styles.subtitle}>List your pre-loved clothing and give it a second home.</p>
      </div>

      <div style={styles.layout}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.section}>
            <h2 style={styles.sectionTitle}>Item Details</h2>
            
            <div style={styles.field}>
              <label style={styles.label}>Item Name</label>
              <input 
                type="text" 
                name="name" 
                placeholder="e.g. Vintage Leather Jacket" 
                style={styles.input} 
                onChange={handleChange}
                required
              />
            </div>

            <div style={styles.row}>
              <div style={styles.field}>
                <label style={styles.label}>Brand</label>
                <input 
                  type="text" 
                  name="brand" 
                  placeholder="e.g. Levi's" 
                  style={styles.input} 
                  onChange={handleChange}
                  required
                />
              </div>
              <div style={styles.field}>
                <label style={styles.label}>Price (₪)</label>
                <input 
                  type="number" 
                  name="price" 
                  placeholder="0" 
                  style={styles.input} 
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Category</label>
              <select name="category" style={styles.input} onChange={handleChange} required>
                <option value="">Select a category</option>
                <option value="tops">Tops</option>
                <option value="bottoms">Bottoms</option>
                <option value="dresses">Dresses</option>
                <option value="outerwear">Outerwear</option>
                <option value="shoes">Shoes</option>
              </select>
            </div>

            <div style={styles.field}>
              <label style={styles.label}>Description</label>
              <textarea 
                name="description" 
                rows="4" 
                placeholder="Tell buyers about the condition, fit, and material..." 
                style={styles.textarea}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          <button type="submit" style={styles.submitButton}>
            <Upload size={20} /> Publish Listing
          </button>
        </form>

        <div style={styles.sidebar}>
          <div style={styles.photoUpload}>
            <div style={styles.uploadPlaceholder}>
              <Camera size={48} color="var(--accent-brown)" />
              <p style={{ fontWeight: '600', marginTop: '1rem' }}>Upload Photos</p>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Up to 5 clear photos</p>
            </div>
          </div>
          
          <div style={styles.tipBox}>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem' }}>
              <AlertCircle size={20} color="var(--primary-brown)" />
              <strong style={{ fontSize: '0.9rem' }}>Selling Tip</strong>
            </div>
            <p style={{ fontSize: '0.85rem', lineHeight: '1.4', color: 'var(--text-muted)' }}>
              Items with multiple clear photos and detailed descriptions sell 3x faster! Make sure to mention any flaws.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    padding: '4rem 20px',
  },
  header: {
    textAlign: 'center',
    marginBottom: '4rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '0.5rem',
  },
  subtitle: {
    color: 'var(--text-muted)',
    fontSize: '1.1rem',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1.6fr 1fr',
    gap: '4rem',
    maxWidth: '1000px',
    margin: '0 auto',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2.5rem',
  },
  section: {
    backgroundColor: 'var(--white)',
    padding: '2.5rem',
    borderRadius: 'var(--border-radius)',
    boxShadow: 'var(--shadow)',
  },
  sectionTitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
    borderBottom: '1px solid var(--secondary-cream)',
    paddingBottom: '1rem',
  },
  field: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.6rem',
    marginBottom: '1.5rem',
    flex: 1,
  },
  row: {
    display: 'flex',
    gap: '1.5rem',
  },
  label: {
    fontSize: '0.9rem',
    fontWeight: '600',
    color: 'var(--primary-brown)',
  },
  input: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #E5E1DA',
    fontSize: '1rem',
    outline: 'none',
    transition: 'var(--transition)',
    backgroundColor: '#FAFAFA',
  },
  textarea: {
    padding: '1rem',
    borderRadius: '8px',
    border: '1px solid #E5E1DA',
    fontSize: '1rem',
    outline: 'none',
    resize: 'none',
    backgroundColor: '#FAFAFA',
  },
  submitButton: {
    backgroundColor: 'var(--primary-brown)',
    color: 'var(--white)',
    padding: '1.2rem',
    borderRadius: 'var(--border-radius)',
    fontSize: '1.1rem',
    fontWeight: '700',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',
    transition: 'var(--transition)',
  },
  sidebar: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  photoUpload: {
    aspectRatio: '1/1',
    border: '2px dashed var(--secondary-cream)',
    borderRadius: 'var(--border-radius)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'var(--white)',
    cursor: 'pointer',
    transition: 'var(--transition)',
  },
  uploadPlaceholder: {
    textAlign: 'center',
  },
  tipBox: {
    backgroundColor: 'var(--secondary-cream)',
    padding: '1.5rem',
    borderRadius: 'var(--border-radius)',
    borderLeft: '4px solid var(--primary-brown)',
  },
};

export default AddProductPage;
