import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import TableContext from './TableContext';
import YoutubeAdd from './YoutubeAdd';
import YoutubeNavbar from './YoutubeNavbar';
import YoutubeSearch from './YoutubeSearch';
import YoutubeTable from './YoutubeTable';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <TableContext>

    <YoutubeNavbar/>
    <YoutubeSearch/>
    <YoutubeAdd/>
    <YoutubeTable/>
    </TableContext>
  </React.StrictMode>
);


