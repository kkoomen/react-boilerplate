import React, { Component } from 'react';
import styles from './style.css';

class NotFound extends Component {
  render() {
    return (
      <div className={styles.NotFound}>
        <h1>404</h1>
        <p>The page you were looking for does not exist or has been moved.</p>
      </div>
    );
  }
}

export default NotFound;
