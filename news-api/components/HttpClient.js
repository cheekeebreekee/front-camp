import { baseUrl, apiKey } from '../constants.js';

export default class HttpClient {
  constructor() {
    this.params = '';
  }

  createURL(url, params) {
    this.params = Object.keys(params).reduce((acc, el, i) => `${acc + el}=${params[el]}&`, '?');
    return `${baseUrl}${url}${this.params}apiKey=${apiKey}`;
  }

  get(...params) {
    return fetch(this.createURL(...params))
  }
}
