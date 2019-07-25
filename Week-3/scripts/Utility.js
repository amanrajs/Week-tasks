
function clicked(){
  return clickEvent => {
    if(/^\d+$/.test(clickEvent.srcElement.id)){
      popup.style.display = 'block';
      popup.innerHTML = '';
      let content=(document.getElementById(clickEvent.srcElement.id)).data;
      let textArea = document.createElement('div'),
      horizontaLine = document.createElement('hr'),
      titlepopup = document.createElement('div'),
      closePopup = document.createElement('div'),
      descriptionpopup = document.createElement('div');
      descriptionpopup.textContent = content;
      titlepopup.textContent = (document.getElementById(clickEvent.srcElement.id)).heading;
      titlepopup.appendChild(horizontaLine);
      closePopup.textContent = '\u2A2f';
      textArea.appendChild(titlepopup);
      textArea.appendChild(closePopup);
      textArea.setAttribute('id','titleandcross');
      titlepopup.setAttribute('id','titlepopup');
      descriptionpopup.setAttribute('id','descriptionpopup');
      closePopup.setAttribute('id','closePopup');
      popup.appendChild(textArea);
      popup.appendChild(descriptionpopup);
      fullContainer.style.opacity = '0.3';

    }
    else if(clickEvent.srcElement.id === 'closePopup'){
      popup.style.display = 'none';
      fullContainer.style.opacity = '1';
    }
  }
}
function emailSave(){
  let regexEmail = /\S+@\S+\.\S+/;
  let emailid= document.getElementById('email').value;
  if(regexEmail.test(emailid)){
    localStorage.setItem(emailid, JSON.stringify(emailid));
    alert("Subscribed successfully");
  }
  else{
    alert("Invalid Emailid");
  }
}
