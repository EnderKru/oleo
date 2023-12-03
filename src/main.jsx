import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

import './styles/common.css';
import '../src/styles/reset.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
