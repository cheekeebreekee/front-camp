const source = `abc-news`;
//bbc-sport
//cbc-news
//bbc-news
//bloomberg
//abc-news
const buildUrl = (source) => `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8a327229878e4966995d6ef0bbb5e280`;
const customImageUrl = `http://bydesignvsm.com/wp-content/uploads/2015/06/Black-Background-HD-Wallpaper-24.jpg`;
const parseJSON = (data) => data.json();

const getYear = (date) => date.split('-')[0];

const getMonth = (date) => {
  const monthsArr = {'01':'Jan', '02':'Feb', '03':'Mar', '04':'Apr', '05':'May', '06':'Jun', '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct',
  '11':'Nov', '12':'Dec'};
  return monthsArr[date.split('-')[1]];
}

const getDay = (date) => date.split('-')[2];
// Object.keys(el).splice(1).map((article) =>
const parseData = (data) => data.articles.map((el) =>  {
  const customDate = new Date().toISOString().slice(0,10).toString();
  const newsCard = `
    <div class="news-card">
      <img class="news-card__img" src="${el.urlToImage || customImageUrl}" alt="News Article Image">
      <div class="news-card__wrapper">
        <div class="news-card__header">
          <div class="news-card__date">
            <span class="news-card__day">${getDay(el.publishedAt || customDate)}</span>
            <span class="news-card__month">${getMonth(el.publishedAt || customDate)}</span>
            <span class="news-card__year">${getYear(el.publishedAt || customDate)}</span>
          </div>
          <ul class="news-card__menu news-card__content">
            <li><a href="#" class="fa fa-bookmark-o"></a></li>
            <li><a href="#" class="fa fa-heart-o"><span>18</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>3</span></a></li>
          </ul>
        </div>
        <div class="news-card__data">
          <div class="news-card__content">
            <span class="news-card__author">${el.author}</span>
            <h1 class="news-card__title"><a href="#">${el.title}</a></h1>
            <p class="news-card__description">${el.description}</p>
            <a href="${el.url}" class="news-card__button">Read more</a>
          </div>
        </div>
      </div>
    </div>
  `;
  return newsCard;
});

const renderToDom = (stringNodes) => {
  const container = document.querySelector('.container');
  stringNodes.map((el) => container.insertAdjacentHTML('afterbegin', el));
}

fetch(buildUrl(source))
  .then((response) => parseJSON(response))
  .then((data) => parseData(data))
  .then((nodes) => renderToDom(nodes))
  .catch((err) => console.log(err));
