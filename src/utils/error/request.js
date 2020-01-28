import { get } from 'lodash';

export default class RequestError extends Error {
  constructor(error) {
    const message = get(error, 'response.data.message')
      || get(error, 'response.statusText', '')
      || get(error, 'message', '');

    super(message);

    // Maintain proper stack trace for where our error was thrown
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, RequestError);
    }

    this.error = error;
    this.message = message;
    this.response = get(error, 'response.data', {});
    this.status = get(error, 'response.status', null);
  }
}
