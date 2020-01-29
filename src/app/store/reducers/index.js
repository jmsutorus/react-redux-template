import { combineReducers } from 'redux';
import RootReducer from './RootReducer';
import ProductReducer from './ProductReducer';

const reducers = combineReducers({
  RootReducer,
  ProductReducer
});

export default reducers;
