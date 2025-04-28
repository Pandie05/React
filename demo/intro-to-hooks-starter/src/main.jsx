import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UseStateDemo } from './components/UseStateDemo';
import UseEffectDemo from './components/UseEffectDemo';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>


        <Route path="/" element={<App/>}>
          <Route index element={<UseStateDemo />} />
          <Route path="state-demo" element={<UseStateDemo />} />
          <Route path="effect-demo" element={<UseEffectDemo />} >
            <Route path=":startingCount" element={<UseEffectDemo />} />
          </Route>
          
          <Route path="*" element={<div>404</div>} />
        </Route>


      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)