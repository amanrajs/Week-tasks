window.onload = init;
function init(){
  let fullContainer=document.createElement('div'),
  container = document.createElement('div'),
  popup = document.createElement('div'),
  app = document.querySelector('main'),
  appBody= document.createElement('div'),
  headerBox=document.createElement('div'),
  toptag=document.createElement('h2'),
  toptagItalic=document.createElement('i'),
  checkEmail=document.createElement('div'),
  email = document.createElement("input"),
  subscribebtn = document.createElement('button'),
  header = document.querySelector('header'),
  footerTag=document.createElement('p'),
  foot = document.querySelector('footer');

  popup.setAttribute('class','popup');
  app.appendChild(popup);
  fullContainer.setAttribute('class', 'fullcont');
  container.setAttribute('class', 'left-container');
  appBody.setAttribute('class','main-container');
  headerBox.setAttribute('class','headerbox')
  toptag.textContent=headerTagText;
  toptagItalic.textContent=headerTagSubText;
  checkEmail.setAttribute('class','check');
  email.setAttribute('id','email');
  email.type = 'text';
  subscribebtn.innerHTML=subscribeTxt;
  subscribebtn.setAttribute('id','btn-email');
  subscribebtn.addEventListener("click", emailSave);
  checkEmail.appendChild(email);
  checkEmail.appendChild(subscribebtn);
  headerBox.appendChild(toptag);
  headerBox.appendChild(toptagItalic);
  headerBox.appendChild(checkEmail);
  header.appendChild(headerBox);
  footerTag.setAttribute('id','footertag');
  footerTag.textContent=footerText;
  foot.appendChild(footerTag);
  app.prepend(appBody);
  appBody.append(fullContainer);
  fullContainer.appendChild(container);
  setRightContent(fullContainer,container);
  document.addEventListener('click', clicked(this,fullContainer,popup));
}
