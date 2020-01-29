import React, { createContext, useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { throttle } from 'lodash';

import useEventListener from '../hooks/useEventListener';

export const WindowSizeContext = createContext();

const defaultProps = {
  children: null
};

export function WindowSizeProvider({ children }) {
  const isClient = typeof window !== 'undefined';

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeigh : 0
  });

  const updateWindowSize = throttle(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight
    });
  }, 200);

  useEventListener('resize', updateWindowSize);

  return <WindowSizeContext.Provider value={windowSize}>{children}</WindowSizeContext.Provider>;
}

WindowSizeProvider.defaultProps = defaultProps;
WindowSizeProvider.propTypes = {
  children: PropTypes.node
};

export function useWindowSizeContext() {
  const context = useContext(WindowSizeContext);

  if (context === undefined) {
    throw new Error('useWindowSizeContext must be used within a WindowSizeProvider');
  }

  return context;
}
