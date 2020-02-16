import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';

import './index.scss';


import ReactGA from 'react-ga';
ReactGA.initialize('UA-158657525-1');

const history = createBrowserHistory();

// Initialize google analytics page view tracking
history.listen(location => {
  ReactGA.set({ page: location.pathname }); // Update the user's current page
  ReactGA.pageview(location.pathname); // Record a pageview for the given page
});

ReactDOM.render(<Routes />, document.getElementById('root'));
