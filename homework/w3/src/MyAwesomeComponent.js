import React from 'react';
import Box from './Box';
import Text from './Text';
import Button from './Button';

const MyAwesomeComponent = () => {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <Box size="large">
      <Text size="large" color="darkblue">
        This is a Text component inside a Box
      </Text>
      <Button color="green" onClick={handleClick}>
        Click Me
      </Button>
    </Box>
  );
};

export default MyAwesomeComponent;