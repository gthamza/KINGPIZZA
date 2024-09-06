import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './pages/CardContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CartProvider>  {/* Wrap your app with CartProvider */}
      <App />
    </CartProvider>
  </StrictMode>,
);
