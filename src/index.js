import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryclient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryclient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);