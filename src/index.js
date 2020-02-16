import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Routes from './routes';

import ReactGA from 'react-ga';
ReactGA.initialize('UA-158657525-1');
ReactGA.pageview(window.location.pathname + window.location.search);

ReactDOM.render(<Routes />, document.getElementById('root'));
