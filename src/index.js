import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Rootyoutube from './Rootyoutube';
import SportYoutube from './Sports/SportYoutube';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
{/* <Rootyoutube/> */}
<SportYoutube/>
  </React.StrictMode>
);


