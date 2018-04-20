export const DEBUG_ENABLE_ACTION_LOGS = 'DEBUG_ENABLE_ACTION_LOGS';
export function enableActionLogs() {
  return {
    type: DEBUG_ENABLE_ACTION_LOGS,
  };
}

export const DEBUG_DISABLE_ACTION_LOGS = 'DEBUG_DISABLE_ACTION_LOGS';
export function disableActionLogs() {
  return {
    type: DEBUG_DISABLE_ACTION_LOGS,
  };
}

export const DEBUG_ENABLE_BLACKLISTED_ACTION_LOGS = 'DEBUG_ENABLE_BLACKLISTED_ACTION_LOGS';
export function enableBlacklistedActionLogs() {
  return {
    type: DEBUG_ENABLE_BLACKLISTED_ACTION_LOGS,
  };
}

export const DEBUG_DISABLE_BLACKLISTED_ACTION_LOGS = 'DEBUG_DISABLE_BLACKLISTED_ACTION_LOGS';
export function disableBlacklistedActionLogs() {
  return {
    type: DEBUG_DISABLE_BLACKLISTED_ACTION_LOGS,
  };
}
