import React from 'react';

const Button = ({ color = 'blue', onClick, children }) => {
  const styles = {
    backgroundColor: color,
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  return (
    <button style={styles} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;