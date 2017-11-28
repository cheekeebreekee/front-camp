import { parseJSON } from './../utils.js';

export default class ViewObserver {
  constructor (httpClient, path, renderer, dataProp, requestParams = {}) {
    this.httpClient = httpClient;
    this.path = path;
    this.renderer = renderer;
    this.dataProp = dataProp;
    this.requestParams = requestParams;
  }

  updateView(data) {
    this.httpClient.get(this.path, this.requestParams)
        .then((response) => parseJSON(response))
        .then((data) => this.renderer.render(data[this.dataProp]))
        .catch((err) => console.log(err));
  }
}
