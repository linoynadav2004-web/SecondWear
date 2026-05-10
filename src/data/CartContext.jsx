import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [notification, setNotification] = useState(null);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setNotification(`${product.name} added to bag!`);
    setTimeout(() => setNotification(null), 3000);
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, notification }}>
      {children}
      {notification && (
        <div style={styles.toast}>
          {notification}
        </div>
      )}
    </CartContext.Provider>
  );
};

const styles = {
  toast: {
    position: 'fixed',
    bottom: '2rem',
    right: '2rem',
    backgroundColor: 'var(--primary-brown)',
    color: 'var(--white)',
    padding: '1rem 2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    zIndex: 9999,
    animation: 'slideUp 0.3s ease-out',
  }
};
