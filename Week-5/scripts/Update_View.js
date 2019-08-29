import { setLeftContent } from './Render.js';
import * as constant from './constants.js';

export function setRightContent(fullContainer, container) {
  let rightContainer = document.createElement('div'),
    categoryTitle = document.createElement('h4'),
    select = document.createElement('select');

  rightContainer.setAttribute('class', 'right-container');
  categoryTitle.textContent = constant.selectCategoryText;
  select.setAttribute('class', 'ddlnewschannel');
  fillDropDownNewsChannelList(select);
  rightContainer.appendChild(categoryTitle);
  rightContainer.appendChild(select);
  fullContainer.appendChild(rightContainer);

  select.onchange = () => {
    let val = select.value;
    select.options[0].disabled = true;
    getNewsData(val, fullContainer, container);
  }
}
export function createLeftCard(card, info, index) {
  let image = document.createElement('img'),
    rightSide = document.createElement('div'),
    title = document.createElement('h4'),
    metaDisc = document.createElement('h6'),
    description = document.createElement('p'),
    btn = document.createElement('button'),
    content = info.content,
    contentHead = info.title,
    horizontalLine = document.createElement('hr');

  card.setAttribute('class', 'box');
  image.setAttribute('class', 'image');
  image.src = info.urlToImage;
  rightSide.setAttribute('class', 'vertical');
  title.textContent = info.title;
  metaDisc.setAttribute('class', 'metadisc');
  metaDisc.setAttribute('id', 'meta');
  metaDisc.textContent = info.publishedAt;
  description.setAttribute('class', 'description')
  description.textContent = info.description;
  btn.setAttribute('id', index);
  btn.innerHTML = constant.buttonText;
  if (content) {
    btn.data = content;
    btn.heading = contentHead;
  } else {
    btn.data = info.description;
    btn.heading = contentHead;
  }
  btn.setAttribute('class', 'btncontinue');
  rightSide.appendChild(title);
  rightSide.appendChild(metaDisc);
  rightSide.appendChild(description);
  rightSide.appendChild(btn);
  card.appendChild(image)
  card.appendChild(rightSide);
}
function getNewsData(val, fullContainer, container) {
  let newsUrl = `${constant.url}source=${val}`;
  setLeftContent(fullContainer, container, newsUrl);
}
function fillDropDownNewsChannelList(select) {
  select.options.add(new Option(constant.defaultSelectChannelText, ""));
  for (let item of constant.newsChannel) {
    select.options.add(new Option(item, item));
  }
}
