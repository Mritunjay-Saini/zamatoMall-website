import React from 'react';

function Product() {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Products</h1>
    
      <div style={styles.productList}>
        <div style={styles.productCard}>
          <h3>Product 1</h3>
          <p>Short description of Product 1</p>
        </div>
        <div style={styles.productCard}>
          <h3>Product 2</h3>
          <p>Short description of Product 2</p>
        </div>
        <div style={styles.productCard}>
          <h3>Product 3</h3>
          <p>Short description of Product 3</p>
        </div>
         <div style={styles.productCard}>
          <h3>Product 4</h3>
          <p>Short description of Product 4</p>
        </div>
         <div style={styles.productCard}>
          <h3>Product 5</h3>
          <p>Short description of Product 5</p>
        </div>
         <div style={styles.productCard}>
          <h3>Product 6</h3>
          <p>Short description of Product 6</p>
        </div>
        
      </div>
    </div>
  );
}

const styles = {
  container: {
    padding: '20px',
  },
  heading: {
    fontSize: '28px',
    marginBottom: '10px',
  },
  text: {
    marginBottom: '20px',
    color: '#555',
  },
  productList: {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
  },
  productCard: {
    border: '1px solid #ddd',
    padding: '15px',
    borderRadius: '8px',
    width: '200px',
    backgroundColor: '#fafafa',
  },
};

export default Product;
