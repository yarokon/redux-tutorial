import React from 'react';
import { render } from 'react-dom';

import configureStore from './configureStore';
import Root from './Root';
import './index.css';

import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

render(
  <Root store={store} />,
  document.getElementById('root')
);

registerServiceWorker();
