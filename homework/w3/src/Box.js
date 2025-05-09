import React from 'react';
import './Box.css';

const Box = ({ size = 'medium', children }) => {
  return <div className={`box box-${size}`}>{children}</div>;
};

export default Box;