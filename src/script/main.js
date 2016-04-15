import React from 'react'; // eslint-disable-line no-unused-vars
import { render } from 'react-dom';

import { getStorage } from './util';
import dispatcher from './dispatcher';
import App from './component/app.jsx';

window.addEventListener('load', () => {
  const draft = getStorage('CGMD-draft');

  if (draft) {
    const action = {
      type: 'LOAD_MD',
      data: { md: draft }
    };
    console.log(action);
    dispatcher.dispatch(action);
  }

  render(<App />, document.getElementById('jsApp'));
}, false);
