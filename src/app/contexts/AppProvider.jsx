import React from 'react';
import PropTypes from 'prop-types';
import { noop } from 'lodash';
import { Provider } from 'react-redux';

import { WindowSizeProvider } from './WindowSize';
import { TrackingProvider } from './Tracking';

const propTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired
  }).isRequired,
  children: PropTypes.node,
  tracking: PropTypes.shape({
    track: PropTypes.func.isRequired
  })
};

const defaultProps = {
  children: null,
  tracking: { track: noop }
};

export default function AppProvider({ store, children, tracking }) {
  return (
    <Provider store={store}>
      <WindowSizeProvider>
        <TrackingProvider tracking={tracking}>{children}</TrackingProvider>
      </WindowSizeProvider>
    </Provider>
  );
}

AppProvider.propTypes = propTypes;
AppProvider.defaultProps = defaultProps;
