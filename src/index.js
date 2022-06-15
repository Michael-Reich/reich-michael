import React from 'react';
import {hydrate, render} from 'react-dom';
import ReactGA from 'react-ga';
import Routes from './routes';

import './index.scss';

if (process.env.NODE_ENV !== "development") {
  ReactGA.initialize('UA-108888061-1');
}


const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<Routes />, rootElement);
} else {
  render(<Routes />, rootElement);
}
