import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Counter from './Counter';

const rootElement = document.querySelector('#root');

ReactDOM.render(<Counter />, rootElement);
