function setRightContent(){
  let rightContainer = document.createElement('div');
  rightContainer.setAttribute('class', 'right-container');
  let categoryTitle = document.createElement('h4');
  categoryTitle.textContent = "Select Category";
  let select = document.createElement("select");
  select.setAttribute('id','ddlnewschannel');
  select.options.add( new Option("Select a NEWS Channel",null) );
  select.options.add( new Option("The Times of India","The Times of India") );
  select.options.add( new Option("Hindustantimes","Hindustantimes.com") );
  select.options.add( new Option("News18","News18.com") );
  select.options.add( new Option("Firstpost","Firstpost.com") );
  select.options.add( new Option("Ndtv","Ndtv.com") );
  select.options.add( new Option("Livemint","Livemint.com") );
  select.options.add( new Option("The Hindu","The Hindu") );
  select.options.add( new Option("Thewire","Thewire.in") );
  rightContainer.appendChild(categoryTitle);
  rightContainer.appendChild(select);
  fullContainer.appendChild(rightContainer);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val);
  }
}
function setLeftContent(){
    let url = 'https://newsapi.org/v2/top-headlines?' +
          'country=in&' +
          'apiKey=ac1fd7a9fc1342abb913e554a9525d85&'+'pageSize=30';
            fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    popup.data=data;
    fullContent(data);
  })
  .catch(function(error) {
    console.log(error);
  });
       fullContainer.appendChild(container);
  }
function init(){
    popup.setAttribute('class','popup');
    let app = document.querySelector('main');
    app.appendChild(popup);
    fullContainer.setAttribute('class', 'fullcont');
    container.setAttribute('class', 'left-container');
    let  appBody= document.createElement('div');
    appBody.setAttribute('class','main-container');
    let headerBox=document.createElement('div');
    headerBox.setAttribute('class','headerbox')
    let toptag=document.createElement('h2');
    toptag.textContent="NEWSFEED";
    let toptagItalic=document.createElement('i');
    toptagItalic.textContent="yet Another Newsfeed";
    let checkEmail=document.createElement('div');
    checkEmail.setAttribute('class','check');
    let email = document.createElement("input");
    email.setAttribute('id','email');
    email.type = "text";
    let subscribebtn = document.createElement('button');
    subscribebtn.innerHTML="Subscribe";
    subscribebtn.setAttribute('id','btn-email');
    subscribebtn.addEventListener("click", emailSave);
    checkEmail.appendChild(email);
    checkEmail.appendChild(subscribebtn);
    headerBox.appendChild(toptag);
    headerBox.appendChild(toptagItalic);
    headerBox.appendChild(checkEmail);
    let header = document.querySelector('header');
    header.appendChild(headerBox);
    let footerTag=document.createElement('p');
    footerTag.setAttribute('id','footertag');
    let str = "\u00A9 NewsFeed 2019";
    footerTag.textContent=str;
    let foot = document.querySelector('footer');
    foot.appendChild(footerTag);
    app.prepend(appBody);
    appBody.append(fullContainer);
    setLeftContent();
    setRightContent();
    document.addEventListener('click', clicked(this));
}
