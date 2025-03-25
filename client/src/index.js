import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { AuthProvider } from './context/auth';
import { CartProvider } from './context/cart';



const root = ReactDOM.createRoot(document.getElementById('root'));  // Create root
root.render(
<>
<AuthProvider>
<CartProvider>
<BrowserRouter>
<App></App>
</BrowserRouter>
</CartProvider>
</AuthProvider>


</>
); // Render content inside the root