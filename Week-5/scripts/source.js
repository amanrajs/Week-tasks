import { setRightContent } from './Update_View.js';
import { clicked } from './Utility.js';
import { emailSave } from './Utility.js';
import { fetchTopHeadlines } from './Render.js'
import * as constant from './constants.js';
import 'isomorphic-fetch';
import '../style/style.css';
require('babel-polyfill');

window.onload = init;
function init() {
  console.log("jgjkdsfdfdfdf");
  let fullContainer = document.createElement('div'),
    container = document.createElement('div'),
    popup = document.createElement('div'),
    app = document.querySelector('main'),
    headerBox = document.createElement('div'),
    toptag = document.createElement('h2'),
    toptagItalic = document.createElement('i'),
    checkEmail = document.createElement('div'),
    email = document.createElement("input"),
    subscribebtn = document.createElement('button'),
    header = document.querySelector('header'),
    footerTag = document.createElement('p'),
    foot = document.querySelector('footer'),
    btnLazy = document.createElement('button');

  popup.setAttribute('class', 'popup');
  app.appendChild(popup);
  fullContainer.setAttribute('class', 'fullcont');
  container.setAttribute('class', 'left-container');
  headerBox.setAttribute('class', 'headerbox')
  toptag.textContent = constant.headerTagText;
  toptagItalic.textContent = constant.headerTagSubText;
  btnLazy.innerText = 'Load Top News';
  btnLazy.addEventListener('click', fetchTopHeadlines);
  btnLazy.setAttribute('class', 'lazy');
  checkEmail.setAttribute('class', 'check');
  email.setAttribute('id', 'email');
  email.type = 'text';
  subscribebtn.innerHTML = constant.subscribeTxt;
  subscribebtn.setAttribute('id', 'btn-email');
  subscribebtn.addEventListener("click", emailSave);
  checkEmail.appendChild(email);
  checkEmail.appendChild(subscribebtn);
  headerBox.appendChild(toptag);
  headerBox.appendChild(toptagItalic);
  headerBox.appendChild(btnLazy);
  headerBox.appendChild(checkEmail);
  header.appendChild(headerBox);
  footerTag.setAttribute('id', 'footertag');
  footerTag.textContent = constant.footerText;
  foot.appendChild(footerTag);
  app.appendChild(fullContainer);
  fullContainer.appendChild(container);
  setRightContent(fullContainer, container);
  document.addEventListener('click', clicked(this, fullContainer, popup));
}
