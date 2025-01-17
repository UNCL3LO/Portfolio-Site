import React from 'react';
import ReactDOM from 'react-dom'; // Correct import statement
import App from './App.jsx';
import './index.css';
import MatrixBackground from './components/canvas/MatrixBackground.jsx';

ReactDOM.render(
  <React.StrictMode>
    <MatrixBackground/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
