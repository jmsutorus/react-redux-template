import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from '../middleware';
import reducers from '../reducers';

export function configureStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)),
  );
}

export default configureStore(
  // eslint-disable-next-line no-underscore-dangle
  (typeof window !== 'undefined' && window.__PRELOADED_STATE__) || {},
);
