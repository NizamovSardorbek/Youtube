import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import Rootyoutube from './Rootyoutube';
import SportYoutube from './Sports/SportYoutube';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
<Rootyoutube/>
    </BrowserRouter>
  </React.StrictMode>
);


