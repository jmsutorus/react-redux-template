import React, { createContext, useMemo, useContext } from 'react';
import { merge } from 'lodash';
import PropTypes from 'prop-types';

export const TrackingAPIContext = createContext();
export const TrackingContext = createContext();

export function TrackingProvider({ children, tracking }) {
  return <TrackingAPIContext.Provider value={tracking}>{children}</TrackingAPIContext.Provider>;
}

TrackingProvider.propTypes = {
  children: PropTypes.node.isRequired,
  tracking: PropTypes.shape({
    track: PropTypes.func.isRequired
  }).isRequired
};

export function TrackingRegion({ children, trackingCategory, trackingAction }) {
  const parentContext = useContext(TrackingContext);
  // create a new context only if props change
  const newContext = useMemo(
    () =>
      merge({}, parentContext, {
        category: trackingCategory,
        action: trackingAction
      }),
    [parentContext, trackingAction, trackingCategory]
  );
  return <TrackingContext.Provider value={newContext}>{children}</TrackingContext.Provider>;
}

TrackingRegion.propTypes = {
  children: PropTypes.node.isRequired,
  trackingCategory: PropTypes.string,
  trackingAction: PropTypes.string
};

TrackingRegion.defaultProps = {
  trackingAction: undefined,
  trackingCategory: undefined
};

export function useTrackingAPIContext() {
  const context = useContext(TrackingAPIContext);

  if (context === undefined) {
    throw new Error('useTrackingContext must be used within a TrackingProvider');
  }
  return context;
}

export default TrackingContext;
