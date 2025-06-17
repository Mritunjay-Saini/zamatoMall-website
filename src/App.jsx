import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './home';
import Product from './Product';
import AddSeller from './AddSeller';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div style={styles.appContainer}>
      {/* Navbar */}
      <nav style={styles.navbar}>
        <Link to="/" style={styles.logo}>ZomatoMall</Link>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.link}>Home</Link>
          <Link to="/product" style={styles.link}>Product</Link>
          <Link to="/add-seller" style={styles.link}>Add Seller</Link>
          <Link to="/login" style={styles.link}>Login</Link>
        </div>
      </nav>

      {/* Page Routes */}
      <div style={styles.content}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/add-seller" element={<AddSeller />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} ZomatoMall. All rights reserved.</p>
      </footer>
    </div>
  );
}

// Styles
const styles = {
  appContainer: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  navbar: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#f4f4f4',
    justifyContent: 'space-between',
  },
  logo: {
    fontSize: '20px',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: '#333',
  },
  navLinks: {
    display: 'flex',
    gap: '15px',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  content: {
    flex: 1,
    padding: '20px',
  },
};

export default App;
