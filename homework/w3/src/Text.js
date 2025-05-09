import React from 'react';

const Text = ({ size = 'medium', color = 'black', children }) => {
  const styles = {
    fontSize: size === 'small' ? '12px' : size === 'large' ? '24px' : '16px',
    color: color,
  };

  return <p style={styles}>{children}</p>;
};

export default Text;