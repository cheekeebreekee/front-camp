export const getYear = (date) => date.split('-')[0];

export const getMonth = (date) => {
  const monthsArr = {'01':'Jan', '02':'Feb', '03':'Mar', '04':'Apr', '05':'May', '06':'Jun', '07':'Jul', '08':'Aug', '09':'Sep', '10':'Oct',
  '11':'Nov', '12':'Dec'};
  return monthsArr[date.split('-')[1]];
}

export const getDay = (date) => date.split('T')[0].split('-')[2];

export const parseJSON = (data) => data.json();

export const getNewsCardTemplate = ({ urlToImage, publishedAt, author, title, description, url }) => {
  const customDate = new Date().toISOString().slice(0, 10).toString();
  return `
    <div class="example-1 card">
      <div class="wrapper">
        <div class="date">
          <span class="day">${getDay(publishedAt || customDate)}</span>
          <span class="month">${getMonth(publishedAt || customDate)}</span>
          <span class="year">${getYear(publishedAt || customDate)}</span>
        </div>
        <div class="data">
          <div class="content">
            <span class="author">${author}</span>
            <h1 class="title"><a href="${url}" target="_blank">${title}</a></h1>
            <p class="text">${description}</p>
            <label for="show-menu" class="menu-button"><span></span></label>
          </div>
          <input type="checkbox" id="show-menu" />
          <ul class="menu-content">
            <li>
              <a href="#" class="fa fa-bookmark-o"></a>
            </li>
            <li><a href="#" class="fa fa-heart-o"><span>47</span></a></li>
            <li><a href="#" class="fa fa-comment-o"><span>8</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  `;
}

// <div class="news-card">
//   <img class="news-card__img" src="${urlToImage}" alt="News Article Image">
//   <div class="news-card__wrapper">
//     <div class="news-card__header">
//       <div class="news-card__date">
//         <span class="news-card__day">${getDay(publishedAt || customDate)}</span>
//         <span class="news-card__month">${getMonth(publishedAt || customDate)}</span>
//         <span class="news-card__year">${getYear(publishedAt || customDate)}</span>
//       </div>
//       <ul class="news-card__menu news-card__content">
//         <li><a href="#" class="fa fa-bookmark-o"></a></li>
//         <li><a href="#" class="fa fa-heart-o"><span>0</span></a></li>
//         <li><a href="#" class="fa fa-comment-o"><span>0</span></a></li>
//       </ul>
//     </div>
//     <div class="news-card__data">
//       <div class="news-card__content">
//         <span class="news-card__author">${author}</span>
//         <h1 class="news-card__title"><a href="#">${title}</a></h1>
//         <p class="news-card__description">${description}</p>
//         <a href="${url}" class="news-card__button">Read more</a>
//       </div>
//     </div>
//   </div>
// </div>

export const getNewsSourceTemplate = ({ id, name }) => `<option value="${id}" class="news-list__item">${name}</ption>`;