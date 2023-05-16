import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { CurrentLocal } from "./context/localContext"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CurrentLocal>
      <App />
    </CurrentLocal>
  </React.StrictMode>
);
