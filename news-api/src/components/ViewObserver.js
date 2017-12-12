import { parseJSON } from '../utils.js';

export default class ViewObserver {
  constructor (httpClient, ) {
    this.httpClient = httpClient;
  }

  updateView(path, renderer, dataProp, requestParams = {}) {
    this.httpClient.get(path, requestParams)
        .then((response) => parseJSON(response))
        .then((data) => renderer.render(data[dataProp]))
        .catch((err) => console.log(err));
  }
}
