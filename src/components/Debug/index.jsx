import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames/bind';
import JSONTree from 'react-json-tree';

import {
  enableActionLogs,
  disableActionLogs,
  enableBlacklistedActionLogs,
  disableBlacklistedActionLogs,
} from '../../actions/Debug';

import loggerConfig from '../../config/logger';

import './style.css';

class Debug extends Component {
  state = {
    open: false,
  }

  onClick = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  toggleActionLogs = (e) => {
    if (e.target.checked) {
      this.props.dispatch(enableActionLogs());
    } else {
      this.props.dispatch(disableActionLogs());
    }
  }

  toggleBlacklistedActionLogs = (e) => {
    if (e.target.checked) {
      this.props.dispatch(enableBlacklistedActionLogs());
    } else {
      this.props.dispatch(disableBlacklistedActionLogs());
    }
  }

  render() {
    const classes = classNames('Debug', {
      open: this.state.open,
    });

    return (
      <div className={classes}>
        <div className="icon--wrapper" onClick={this.onClick} title="Debug menu">
          <svg className="icon--debug" width="20pt" height="20pt" viewBox="0 0 30 30">
            <path d="M 29.90625 13.335938 C 29.859375 12.914062 29.367188 12.597656 28.941406 12.597656 C 27.566406 12.597656 26.347656 11.789062 25.835938 10.539062 C 25.3125 9.261719 25.648438 7.769531 26.675781 6.832031 C 26.996094 6.535156 27.035156 6.042969 26.765625 5.699219 C 26.066406 4.8125 25.269531 4.007812 24.390625 3.300781 C 24.046875 3.027344 23.546875 3.0625 23.25 3.390625 C 22.355469 4.382812 20.75 4.75 19.507812 4.234375 C 18.214844 3.6875 17.402344 2.378906 17.480469 0.976562 C 17.507812 0.535156 17.183594 0.148438 16.746094 0.101562 C 15.625 -0.03125 14.492188 -0.03125 13.371094 0.0898438 C 12.9375 0.140625 12.613281 0.511719 12.628906 0.949219 C 12.675781 2.339844 11.851562 3.625 10.574219 4.148438 C 9.347656 4.652344 7.753906 4.285156 6.859375 3.304688 C 6.566406 2.980469 6.074219 2.941406 5.730469 3.210938 C 4.832031 3.914062 4.015625 4.71875 3.300781 5.609375 C 3.027344 5.953125 3.066406 6.453125 3.390625 6.75 C 4.4375 7.695312 4.773438 9.199219 4.230469 10.492188 C 3.714844 11.722656 2.433594 12.519531 0.96875 12.519531 C 0.492188 12.503906 0.152344 12.824219 0.101562 13.253906 C -0.03125 14.386719 -0.03125 15.53125 0.09375 16.667969 C 0.140625 17.089844 0.648438 17.402344 1.078125 17.402344 C 2.382812 17.371094 3.636719 18.179688 4.164062 19.460938 C 4.6875 20.738281 4.351562 22.226562 3.324219 23.167969 C 3.003906 23.464844 2.964844 23.957031 3.234375 24.296875 C 3.933594 25.1875 4.726562 25.992188 5.605469 26.699219 C 5.949219 26.976562 6.449219 26.9375 6.75 26.609375 C 7.644531 25.617188 9.253906 25.25 10.488281 25.769531 C 11.78125 26.308594 12.597656 27.617188 12.519531 29.023438 C 12.492188 29.464844 12.816406 29.847656 13.253906 29.898438 C 14.375 30.03125 15.507812 30.035156 16.628906 29.910156 C 17.0625 29.859375 17.386719 29.484375 17.371094 29.050781 C 17.320312 27.660156 18.144531 26.375 19.421875 25.851562 C 20.65625 25.347656 22.246094 25.714844 23.136719 26.695312 C 23.433594 27.019531 23.925781 27.058594 24.269531 26.789062 C 25.167969 26.085938 25.984375 25.28125 26.695312 24.390625 C 26.972656 24.046875 26.933594 23.546875 26.605469 23.25 C 25.5625 22.304688 25.222656 20.800781 25.765625 19.507812 C 26.277344 18.292969 27.507812 17.476562 28.835938 17.476562 L 29.019531 17.480469 C 29.449219 17.515625 29.847656 17.183594 29.898438 16.746094 C 30.03125 15.613281 30.03125 14.46875 29.90625 13.335938 Z M 15.023438 20.035156 C 12.265625 20.035156 10.019531 17.789062 10.019531 15.03125 C 10.019531 12.273438 12.265625 10.027344 15.023438 10.027344 C 17.78125 10.027344 20.027344 12.273438 20.027344 15.03125 C 20.027344 17.789062 17.78125 20.035156 15.023438 20.035156 Z M 15.023438 20.035156" fillRule="evenodd" clipRule="evenodd" />
          </svg>
        </div>


        <div className="debug--outer-wrapper">
          <div className="json-tree--wrapper">
            <JSONTree data={this.props.fullState.toJS()} hideRoot />
          </div>

          <section className="content--wrapper">
            <header>
              <h3>Debug</h3>
              <svg className="icon--close" width="10pt" height="10pt" viewBox="0 0 30 30" onClick={this.onClick}>
                <path d="M 19.316406 14.964844 C 19.042969 14.699219 19.042969 14.300781 19.316406 14.035156 L 29.589844 4.105469 C 29.863281 3.839844 30 3.441406 30 3.179688 C 30 2.914062 29.863281 2.515625 29.589844 2.25 L 27.671875 0.398438 C 27.398438 0.132812 26.984375 0 26.710938 0 C 26.300781 0 26.027344 0.132812 25.753906 0.398438 L 15.480469 10.328125 C 15.207031 10.59375 14.792969 10.59375 14.519531 10.328125 L 4.246094 0.398438 C 3.972656 0.132812 3.5625 0 3.289062 0 C 3.015625 0 2.601562 0.132812 2.328125 0.398438 L 0.410156 2.25 C 0.136719 2.515625 0 2.914062 0 3.179688 C 0 3.441406 0.136719 3.839844 0.410156 4.105469 L 10.683594 14.035156 C 10.957031 14.300781 10.957031 14.699219 10.683594 14.964844 L 0.410156 24.894531 C 0.136719 25.160156 0 25.558594 0 25.820312 C 0 26.085938 0.136719 26.484375 0.410156 26.75 L 2.328125 28.601562 C 2.601562 28.867188 3.015625 29 3.289062 29 C 3.5625 29 3.972656 28.867188 4.246094 28.601562 L 14.519531 18.671875 C 14.792969 18.40625 15.207031 18.40625 15.480469 18.671875 L 25.753906 28.601562 C 26.027344 28.867188 26.4375 29 26.710938 29 C 26.984375 29 27.398438 28.867188 27.671875 28.601562 L 29.589844 26.75 C 29.863281 26.484375 30 26.085938 30 25.820312 C 30 25.558594 29.863281 25.160156 29.589844 24.894531 Z M 19.316406 14.964844 " fillRule="evenodd" clipRule="evenodd" />
              </svg>
            </header>

            <div className="content">
              <div className="content--scrollable-container">
                <div className="debug--section--wrapper">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="debug--section--label">
                      <strong>Action logs</strong>
                    </div>

                    <div className="form-group">
                      <div className="form-item">
                        <input
                          id="debug-logs-enabled"
                          type="checkbox"
                          onChange={this.toggleActionLogs}
                          checked={this.props.settings.getIn(['logs', 'enabled'])}
                        />
                        <label htmlFor="debug-logs-enabled">Enabled</label>
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="form-item">
                        <input
                          id="debug-logs-show-blacklisted"
                          type="checkbox"
                          onChange={this.toggleBlacklistedActionLogs}
                          checked={this.props.settings.getIn(['logs', 'blacklisted'])}
                        />
                        <label htmlFor="debug-logs-show-blacklisted">Blacklisted</label>
                      </div>
                    </div>

                    <p className="description">
                      The following actions are blacklisted and will not be logged
                      to prevent spamming.
                    </p>
                    <ul>
                      {loggerConfig.blacklist.map((action, index) => {
                        const type = action.toLowerCase().replace(/_+/g, '-');
                        return (
                          <li key={`debug--blacklisted-action--${type}`}>
                            {action}
                          </li>
                        );
                      })}
                    </ul>
                  </form>
                </div>

                <div className="debug--section--wrapper">
                  <div className="debug--section--label">
                    <strong>Environment variables</strong>
                  </div>

                  <div className="json-tree--wrapper">
                    <JSONTree data={process.env} hideRoot />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    fullState: state,
    settings: state.get('debug'),
  };
}

export default connect(mapStateToProps)(Debug);
