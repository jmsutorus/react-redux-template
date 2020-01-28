import axios from 'axios';
import { omit, omitBy, isUndefined } from 'lodash';
import RequestError from '../utils/error/request';

export const CALL_API = '@@redux-api-middleware/CALL_API';

// Eventually we'll need to use some header to get api calls to work consistently
const defaultHeaders = {};

export function APIRequest(
  url,
  options = {
    method: 'GET',
    headers: {},
    query: {},
    data: {},
  },
) {
  return axios({
    url,
    params: options.query,
    data: options.data,
    headers: { ...defaultHeaders, ...options.headers },
    ...options,
  })
    .then(({ data }) => data)
    .catch((error) => {
      throw new RequestError(error);
    });
}

export default () => (next) => (action) => {
  if (!action || !Object.prototype.hasOwnProperty.call(action, CALL_API)) {
    return next(action);
  }
  const actionWith = (actionData) => omit({ ...action, ...actionData }, CALL_API);

  const APIaction = action[CALL_API];

  const {
    types: [
      // Action Types
      requestType,
      successType,
      failureType,
    ],
    endpoint, // API Endpoint
    method, // REST Method
    data, // Post Data
    query, // Query Params
    meta, // Action Meta
  } = APIaction;

  next(
    actionWith(omitBy({
      type: requestType, meta, query, data,
    }, isUndefined)),
  );

  const options = {
    headers: {},
    method: method || 'GET',
    data,
    query,
  };

  return APIRequest(endpoint, options)
    .then((payload) => next(
      actionWith({
        type: successType,
        meta,
        payload,
      }),
    ))
    .catch(({
      error, status, message, response,
    }) => next(
      actionWith({
        type: failureType,
        meta,
        status,
        error:
          message
          || (error && error.message)
          || 'Something really bad happened',
        payload: response,
      }),
    ));
};
