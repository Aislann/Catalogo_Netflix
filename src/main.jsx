import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Tela_Inicial from './Tela_Inicial.jsx';
import Rotas from './rotas.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Rotas />
  </React.StrictMode>
);

