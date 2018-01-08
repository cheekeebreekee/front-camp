import { parseJSON } from './utils.js';
import { createStore } from './redux.js';
import { dispatch } from './redux.js';
import { actions } from './reducers.js';

export default class ViewObserver {
  constructor (httpClient) {
    this.httpClient = httpClient;
  }

  updateView(path, requestParams = {}, store, action) {
    this.httpClient.get(path, requestParams)
        .then((response) => parseJSON(response))
        .then((data) => store.dispatch(action(data)))
        .catch((err) => console.log(err));
    
  }
}
