import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

import './index.scss';

ReactGA.initialize('UA-158657525-1');
ReactDOM.render(<Routes />, document.getElementById('root'));
