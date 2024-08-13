// index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from './Routes/Router';
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Router />
);
