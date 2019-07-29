function emailSave(){
  let emailid= document.getElementById('email').value;
  if(regexEmail.test(emailid)){
    window.localStorage.setItem(emailid, JSON.stringify(emailid));
    alert(emailSubscribedMessage);
  } else{
    alert(emailInvalidMessage);
  }
}
function clicked(clickEvent,fullContainer,popup){
  return clickEvent => {
    if(checkButtonClickRegex.test(clickEvent.srcElement.id)){
      let textArea = document.createElement('div'),
      horizontaLine = document.createElement('hr'),
      titlePopup = document.createElement('div'),
      closePopup = document.createElement('div'),
      descriptionPopup = document.createElement('div');

      popup.style.display = 'block';
      popup.innerHTML = '';
      descriptionPopup.textContent = article_data[Number(clickEvent.srcElement.id)].postDesc;
      titlePopup.textContent = article_data[Number(clickEvent.srcElement.id)].postTitle;
      titlePopup.appendChild(horizontaLine);
      closePopup.textContent = closePopupText;
      textArea.appendChild(titlePopup);
      textArea.appendChild(closePopup);
      textArea.setAttribute('id','titleandcross');
      titlePopup.setAttribute('id','titlepopup');
      descriptionPopup.setAttribute('id','descriptionpopup');
      closePopup.setAttribute('id','closePopup');
      popup.appendChild(textArea);
      popup.appendChild(descriptionPopup);
      fullContainer.style.opacity = '0.3';
    } else if(clickEvent.srcElement.id === 'closePopup'){
      popup.style.display = 'none';
      fullContainer.style.opacity = '1';
    }
  }
}
