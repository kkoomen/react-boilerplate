import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';

import store, { history } from './store';
import * as serviceWorker from './serviceWorker';
import App from './containers/App';
import { APP_ENV } from './config/constants';
import './styles/main.scss';

console.log(`Running enviroment ${APP_ENV}`);

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
  module.hot.accept('src/containers/App', () => {
    render();
  });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
