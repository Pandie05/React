import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UseEffectDemo = () => {
  // first grab the number from the prams
  const {startingCount} = useParams();
  // if we can make it a number it will, else it will be 0
  const startingCountNumber = Number(startingCount) || 0;
  //setting the value to 
  const [renderCount, setRenderCount] = useState(startingCountNumber);

  useEffect(() => {
    console.log('Component mounted');
    setRenderCount((prevCount) => prevCount + 1);
    return () => {
      console.log('Component unmounted');
    };
  }, []);

  return (
    <>
      <div className="header">useEffect Demo</div>
      <p>Render Count: {renderCount}</p>
    </>
  );
};

export default UseEffectDemo;