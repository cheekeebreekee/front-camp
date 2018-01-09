import { baseUrl, apiKey } from './constants.js';

let instance = null;

export default class HttpClient {
  constructor() {
    if(!instance){
      instance = this;
    }

    this.params = '';

    return instance;
  }

  createURL(url, params) {
    this.params = Object.keys(params).reduce((acc, el, i) => `${acc + el}=${params[el]}&`, '?');
    return `${baseUrl}${url}${this.params}apiKey=${apiKey}`;
  }

  get(...params) {
    return fetch(this.createURL(...params))
  }
}
