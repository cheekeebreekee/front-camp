import Renderer from './components/Renderer.js';
import HttpClient from './components/HttpClient.js';
import ViewObserver from './components/ViewObserver.js';
import { parseJSON, getNewsCardTemplate, getNewsSourceTemplate } from './utils.js';
import { newsSourcesContainerId, newsItemsContainerId } from './constants.js';

const httpClient = new HttpClient();
const newsSourcesRenderer = new Renderer(newsSourcesContainerId, getNewsSourceTemplate);
const newsItemsRenderer = new Renderer(newsItemsContainerId, getNewsCardTemplate);
const newsSourcesContainer = document.querySelector(newsSourcesContainerId);
const newsSourcesObserver = new ViewObserver(httpClient, '/sources', newsSourcesRenderer, 'sources');

newsSourcesObserver.updateView();

const clickHandler = (event) => {
  const requestParams = {
    'sources': event.target.value
  }
  const newsItemsObserver = new ViewObserver(httpClient, '/top-headlines', newsItemsRenderer, 'articles', requestParams);
  newsItemsRenderer.clearContainer();
  newsItemsObserver.updateView();
}

newsSourcesContainer.addEventListener('change', clickHandler);
