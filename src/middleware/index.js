import thunk from 'redux-thunk';
import api from './api';

const middleware = [thunk, api];

export default middleware;
