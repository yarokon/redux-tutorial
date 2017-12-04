import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from './App';
import { ROOT_PATH } from './index';

const Root =({ store }) => (
  <Provider store={store} >
    <Router>
      <div>
        <Route
          path={`${ROOT_PATH}/:filter?`}
          component={App}
        />
      </div>
    </Router>
  </Provider>
);

export default Root;
