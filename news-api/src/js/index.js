import '../scss/style.scss';
import Renderer from './Renderer.js';
import HttpClient from './HttpClient.js';
import ViewObserver from './ViewObserver.js';
import { parseJSON, getNewsCardTemplate, getNewsSourceTemplate } from './utils.js';
import { newsSourcesContainerId, newsItemsContainerId } from './constants.js';

const httpClient = new HttpClient();
const newsSourcesRenderer = new Renderer(newsSourcesContainerId, getNewsSourceTemplate);
const newsItemsRenderer = new Renderer(newsItemsContainerId, getNewsCardTemplate);
const newsSourcesContainer = document.querySelector(newsSourcesContainerId);
const viewObserver = new ViewObserver(httpClient);
const newsLoadBtn = document.querySelector('.load-news-btn');

viewObserver.updateView('/sources', newsSourcesRenderer, 'sources');

const uploadNewsListAssets = () => {
  const sourceList = document.querySelector('.news-list');
  const requestParams = {
    'sources': sourceList.options[sourceList.selectedIndex].value
  }
  require.ensure([], (require) => {
    require('../scss/news-list.scss');
  }, null, 'news-list');
  newsItemsRenderer.clearContainer();
  viewObserver.updateView('/top-headlines', newsItemsRenderer, 'articles', requestParams);
}

newsLoadBtn.addEventListener('click', uploadNewsListAssets);
