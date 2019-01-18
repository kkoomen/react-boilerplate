import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import store, { history } from './store';
import registerServiceWorker from './registerServiceWorker';
import App from './containers/App';
import './index.css';

console.log(`Running enviroment ${process.env.NODE_ENV}`);

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <App />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root')
  );
};

render();

// Enable Webpack hot module replacement for components.
if (module.hot) {
  module.hot.accept('./containers/App', () => {
    render();
  });
}

registerServiceWorker();
