import { createLeftCard } from './Update_View.js';
import { clickedLazy } from './Utility.js'
import 'isomorphic-fetch';
require("babel-polyfill");

export function setLeftContent(fullContainer, container, newsUrl) {
  fetch(newsUrl)
    .then((resp) => resp.json())
    .then(function (data) {

      fullContainer.data = data;
      changeContent(container, fullContainer);
    })
    .catch(function (error) {
    });
}
function changeContent(container, fullContainer) {
  let data = fullContainer.data,
    card,
    horizontalLine = document.createElement('hr');
  container.innerHTML = '';
  for (let index in data.articles) {
    card = document.createElement('div');
    createLeftCard(card, data.articles[index], index);
    container.appendChild(card);
    container.appendChild(horizontalLine);
  }
  card.style.paddingBottom = '40px';
}



export function fetchTopHeadlines() {
  return import("../lazy.js").then((data) => {
    data.default().then((d) => {
      clickedLazy(this, d)
    });

  })
}
