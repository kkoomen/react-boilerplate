import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

import Home from '../Home';
import NotFound from '../NotFound';
import styles from './style.css';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <header>
          <Link to="/">Home</Link>
        </header>

        <main>
          <Switch>
            <Route strict exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
