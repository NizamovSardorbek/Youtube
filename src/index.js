import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import YoutubeAdd from './YoutubeAdd';
import YoutubeNavbar from './YoutubeNavbar';
import YoutubeSearch from './YoutubeSearch';
import YoutubeTable from './YoutubeTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <YoutubeNavbar/>
    <YoutubeSearch/>
    <YoutubeAdd/>
    <YoutubeTable/>
  </React.StrictMode>
);


