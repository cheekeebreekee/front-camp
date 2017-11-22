let adress = `https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=8a327229878e4966995d6ef0bbb5e280`;

function parseJSON(data) {
  return JSON.stringify(data);
}

fetch(adress)
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
