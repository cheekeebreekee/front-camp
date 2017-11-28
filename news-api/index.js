import Renderer from './components/Renderer.js';
import HttpClient from './components/HttpClient.js';
import ViewObserver from './components/ViewObserver.js';
import { parseJSON, getNewsCardTemplate, getNewsSourceTemplate } from './utils.js';
import { newsSourcesContainerId, newsItemsContainerId } from './constants.js';

const httpClient = new HttpClient();
const newsSourcesRenderer = new Renderer(newsSourcesContainerId, getNewsSourceTemplate);
const newsItemsRenderer = new Renderer(newsItemsContainerId, getNewsCardTemplate);
const newsSourcesContainer = document.querySelector(newsSourcesContainerId);
const viewObserver = new ViewObserver(httpClient);

viewObserver.updateView('/sources', newsSourcesRenderer, 'sources');

const clickHandler = (event) => {
  const requestParams = {
    'sources': event.target.value
  }
  newsItemsRenderer.clearContainer();
  viewObserver.updateView('/top-headlines', newsItemsRenderer, 'articles', requestParams);
}

newsSourcesContainer.addEventListener('change', clickHandler);
