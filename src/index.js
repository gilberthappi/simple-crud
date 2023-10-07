import React from 'react';
// import ReactDOM from 'react-dom';
import './index.css';
import { createRoot } from 'react-dom/client'; // Updated import
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root')); // Use createRoot

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

reportWebVitals();
