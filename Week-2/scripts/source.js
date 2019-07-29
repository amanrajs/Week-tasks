window.onload = init;
function init(){
  let fullContainer = document.createElement('div'),
  container = document.createElement('div'),
  popup = document.createElement('div'),
  app = document.querySelector('main'),
  appBody= document.createElement('div'),
  headerBox=document.createElement('div'),
  toptag=document.createElement('h2'),
  topTagItalic=document.createElement('i'),
  header = document.querySelector('header'),
  footerTag=document.createElement('p'),
  foot = document.querySelector('footer');

  popup.setAttribute('class','popup');
  app.appendChild(popup);
  fullContainer.setAttribute('class', 'fullcont');
  container.setAttribute('class', 'left-container');
  appBody.setAttribute('class','main-container');
  headerBox.setAttribute('class','headerbox');
  toptag.textContent = headerTagText;
  topTagItalic.textContent= headerTagSubText;
  headerBox.appendChild(toptag);
  headerBox.appendChild(topTagItalic);
  header.appendChild(headerBox);
  footerTag.setAttribute('id','footertag');
  footerTag.textContent=footerText;
  foot.appendChild(footerTag);
  app.prepend(appBody);
  appBody.append(fullContainer);
  setLeftContent(fullContainer,container);
  setRightContent(fullContainer,container);
  document.addEventListener('click', clicked(this,fullContainer,popup));
}
