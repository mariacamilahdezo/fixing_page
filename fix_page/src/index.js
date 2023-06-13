// React and redux:
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// Components and decoration:
import './css/App.css';
import './css/index.css';

// Importing app
import App from './app/App';

// Constants
const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

// Rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();