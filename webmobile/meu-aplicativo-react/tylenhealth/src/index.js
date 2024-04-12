import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomePage from './HomePage.js';
import ProfilePage from './ProfilePage.js';
import LoginPage from './LoginPage.js';
import DetailPage from './DetailPage.js';
import HealthInfoPage from './HealthInfoPage.js';
import SearchResultsPage from './SearchResultsPage.js';

ReactDOM.render(
  <React.StrictMode>
    <HomePage/>
  </React.StrictMode>,
  document.getElementById('root')
);