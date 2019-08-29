import * as constant from './constants.js';
export function clicked(clickEvent, fullContainer, popup) {
  return clickEvent => {
    if (constant.checkButtonClickRegex.test(clickEvent.srcElement.id)) {
      if (document.getElementById('newPopup'))
        document.getElementById('newPopup').style.display = 'none';
      let textArea = document.createElement('div'),
        horizontaLine = document.createElement('hr'),
        titlePopup = document.createElement('div'),
        closePopup = document.createElement('div'),
        descriptionPopup = document.createElement('div'),
        content = (document.getElementById(clickEvent.srcElement.id)).data;
      titlePopup.textContent = (document.getElementById(clickEvent.srcElement.id)).heading;
      popup.style.display = 'block';
      popup.innerHTML = '';
      descriptionPopup.textContent = content;
      titlePopup.appendChild(horizontaLine);
      closePopup.textContent = constant.closePopupText;
      textArea.appendChild(titlePopup);
      textArea.appendChild(closePopup);
      textArea.setAttribute('class', 'titleandcross');
      titlePopup.setAttribute('class', 'titlepopup');
      descriptionPopup.setAttribute('id', 'descriptionpopup');
      closePopup.setAttribute('class', 'closePopup');
      closePopup.setAttribute('id', 'closePopup');
      popup.appendChild(textArea);
      popup.appendChild(descriptionPopup);
      fullContainer.style.opacity = '0.3';
    } else if (clickEvent.srcElement.id === 'closePopup') {
      popup.style.display = 'none';
      fullContainer.style.opacity = '1';
    }
  }
}
export function emailSave() {
  let emailid = document.getElementById('email').value;
  if (constant.regexEmail.test(emailid)) {
    window.localStorage.setItem(emailid, JSON.stringify(emailid));
    alert(constant.emailSubscribedMessage);
  } else {
    alert(constant.emailInvalidMessage);
  }
}
export function clickedLazy(clickEvent, data) {
  console.log(clickEvent);
  let popup = document.createElement('div'),
    closePopup = document.createElement('div'),
    app = document.querySelector('main');

  popup.setAttribute('class', 'popup');
  popup.setAttribute('id', 'newPopup');
  popup.style.display = 'block';
  popup.innerHTML = '';
  popup.appendChild(closePopup);

  for (let item of data) {
    let titlePopup = document.createElement('p'),
      horizontaLine = document.createElement('hr');
    titlePopup.textContent = item.title;
    popup.appendChild(titlePopup);
    popup.appendChild(horizontaLine);
  }
  closePopup.textContent = constant.closePopupText;
  closePopup.setAttribute('class', 'closePopup');
  closePopup.setAttribute('id', 'closePopup');
  app.appendChild(popup);
  closePopup.addEventListener('click', function () {
    popup.style.display = 'none';
  })
}


