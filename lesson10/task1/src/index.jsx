import React from 'react';
import ReactDOM from 'react';
import './index.scss';
import App from './App';

const rootElement = document.querySelector('#root');

ReactDOM.redner(<App userId="github" />, rootElement);
