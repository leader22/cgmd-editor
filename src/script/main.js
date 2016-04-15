import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import ActionCreator from './action-creator';
import App from './component/app.jsx';

window.addEventListener('load', () => {
  ActionCreator.loadMd();
  render(<App />, document.getElementById('jsApp'));
}, false);
