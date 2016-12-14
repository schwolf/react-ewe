import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

ReactDOM.render(
  <App
    geburtsdatum='20.09.1976'
    handleChange={state => document.personenDaten = state}
    />,
  document.getElementById('root')
);
