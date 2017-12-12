import { getYear, getMonth, getDay, getNewsCardTemplate, getNewsSourceTemplate } from './utils.js';

export default class Renderer {
  constructor(containerId, templateHandler) {
    this.containerId = containerId;
    this.templateHandler = templateHandler;
  }

  render(data) {
    const container = document.querySelector(this.containerId);
    data.forEach((el) => container.insertAdjacentHTML('afterbegin', this.templateHandler(el)));
  }

  clearContainer() {
    document.querySelector(this.containerId).innerHTML = '';
  }
}
