import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import App from './app.jsx';

window.addEventListener('load', () => {
  render(<App />, document.getElementById('jsApp'));
}, false);
