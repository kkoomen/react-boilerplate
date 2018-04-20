import Immutable from 'immutable';

import {
  DEBUG_ENABLE_ACTION_LOGS,
  DEBUG_DISABLE_ACTION_LOGS,
  DEBUG_ENABLE_BLACKLISTED_ACTION_LOGS,
  DEBUG_DISABLE_BLACKLISTED_ACTION_LOGS,
} from '../../actions/Debug';

const initialState = Immutable.fromJS({
  logs: {
    enabled: true,
    blacklisted: false,
  },
});

export default function debug(state = initialState, action) {
  switch (action.type) {
    case DEBUG_ENABLE_ACTION_LOGS: {
      return state.setIn(['logs', 'enabled'], true);
    }

    case DEBUG_DISABLE_ACTION_LOGS: {
      return state.setIn(['logs', 'enabled'], false);
    }

    case DEBUG_ENABLE_BLACKLISTED_ACTION_LOGS: {
      return state.setIn(['logs', 'blacklisted'], true);
    }

    case DEBUG_DISABLE_BLACKLISTED_ACTION_LOGS: {
      return state.setIn(['logs', 'blacklisted'], false);
    }

    default: {
      return state;
    }
  }
}
