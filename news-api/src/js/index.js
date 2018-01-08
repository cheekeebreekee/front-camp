import '../scss/style.scss';
import HttpClient from './HttpClient.js';
import ViewObserver from './ViewObserver.js';
import { getNewsCardTemplate, getNewsSourceTemplate, renderTemplateData } from './utils.js';
import { newsSourcesContainerId, newsItemsContainerId } from './constants.js';
import { createStore } from './redux.js';
import reducer, { actions } from './reducers.js';

const store = createStore(reducer);
const httpClient = new HttpClient();
const newsSourcesContainer = document.querySelector(newsSourcesContainerId);
const viewObserver = new ViewObserver(httpClient);
const newsLoadBtn = document.querySelector('.load-news-btn');
store.subscribe(renderTemplateData(newsSourcesContainerId, getNewsSourceTemplate, 'sources'));
store.subscribe(renderTemplateData(newsItemsContainerId, getNewsCardTemplate, 'news'));
viewObserver.updateView('/sources', {}, store, actions.fetchSources);

const uploadNewsListAssets = () => {
  const sourceList = document.querySelector('.news-list');
  const requestParams = {
    'sources': sourceList.options[sourceList.selectedIndex].value
  }
  require.ensure([], (require) => {
    require('../scss/news-list.scss');
  }, null, 'news-list');
  // newsItemsRenderer.clearContainer();
  viewObserver.updateView('/top-headlines', requestParams, store, actions.fetchNews);
}

newsLoadBtn.addEventListener('click', uploadNewsListAssets);
