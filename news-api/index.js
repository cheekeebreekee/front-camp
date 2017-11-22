const source = `bbc-sport`;
//bbc-sport
//cbc-news
//bbc-news
//bloomberg
//abc-news
const buildUrl = (source) => `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=8a327229878e4966995d6ef0bbb5e280`;

const parseJSON = (data) => data.json();

const parseData = (data) => data.articles.map((el) => Object.keys(el).splice(1).map((article) => console.log(`${article}:${el[article]}`)));

fetch(buildUrl(source))
  .then((response) => parseJSON(response))
  .then((data) => console.log(parseData(data)))
  .catch((err) => console.log(err));
