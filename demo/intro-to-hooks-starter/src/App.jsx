import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';
import './App.css';
import {Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function App() {

  const navigate = useNavigate();


  const handleShowUseStateDemo = () => {
    navigate('state-demo');
  };

  const handleShowUseEffectDemo = () => {
    navigate('effect-demo');
  };


  return (

    <div className="App">
      <hr />
      {/* <Link to="state-demo">useState Demo</Link> */}

      <button onClick={() => handleShowUseStateDemo()} className="button">
        UseState Demo
      </button>
      <button onClick={() => handleShowUseEffectDemo()} className="button">
        UseEffect Demo
      </button>

      {/* this tells it where to load the children */}
      <Outlet />

      {/* <Routes>
        <Route path="state-demo" element={<UseStateDemo/>}/>
        <Route path="effect-demo" element={<UseEffectDemo/>}/>
      </Routes> */}
    </div>
  );
}

export default App;