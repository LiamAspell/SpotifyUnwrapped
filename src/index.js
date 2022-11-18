import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import Player from './Pages/Player';
import Greeting from './Pages/HomeGreeting';
import Navbar from './components/ColorSchemesExample'
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
