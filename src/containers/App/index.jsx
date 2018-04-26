import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';

// Containers
import Home from '../Home';
import NotFound from '../NotFound';

// Components
import Debug from '../../components/Debug';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
            </ul>
          </nav>
        </header>

        <main>
          <Switch>
            <Route strict exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </main>

        {process.env.NODE_ENV !== 'production' ? <Debug /> : null}
      </div>
    );
  }
}

export default App;
