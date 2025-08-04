import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './src/App';

const root = createRoot(document.getElementById('root'));
const basename = import.meta.env.PUBLIC_URL ||  "/";
root.render(
  <StrictMode>
    <BrowserRouter basename={basename}>
       <App />
    </BrowserRouter>
    
  </StrictMode>
);