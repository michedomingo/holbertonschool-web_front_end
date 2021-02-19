function createElement(data) {
  let paragraph = document.createElement('p');
  paragraph.textContent = data;
  document.querySelector('body').appendChild(paragraph);
}

function queryWikipedia(callback) {
  let article = new XMLHttpRequest();

  article.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*',
    true
  );

  article.onload = function () {
    if (this.status === 200) {
      let fetch = JSON.parse(this.responseText);

      callback(fetch.query.pages[21721040].extract);
    }
  };
  article.send();
}
queryWikipedia(createElement);
