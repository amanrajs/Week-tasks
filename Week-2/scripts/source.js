function changeContent(val){
  container.innerHTML = '';
  for(i in obj){
    if(obj[i].postCategory===val){
      let card = document.createElement('div');
      card.setAttribute('class', 'box');
      let image = document.createElement('img');
      image.setAttribute('class','image');
      image.src="resource/download.png";
      let rightSide = document.createElement('div');
      rightSide.setAttribute('class','vertical');
      let title = document.createElement('h4')
      title.textContent = obj[i].postTitle;
      let metaDisc = document.createElement('h6');
      metaDisc.setAttribute('class','metadisc');
      metaDisc.setAttribute('id','meta');
      metaDisc.textContent = obj[i].postDate;
      let description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = obj[i].postDesc;
      let btn = document.createElement('button')
      btn.setAttribute('id',i);
      btn.innerHTML="Continue Reading";
      btn.setAttribute('class','btncontinue')
      let horizontalLine = document.createElement("HR");
      rightSide.appendChild(title);
      rightSide.appendChild(metaDisc);
      rightSide.appendChild(description);
      rightSide.appendChild(btn);
      card.appendChild(image)
      card.appendChild(rightSide)
      container.appendChild(card);
      container.appendChild(horizontalLine);
    }
  }
}
function setRightContent(){
  let right_container = document.createElement('div');
  right_container.setAttribute('class', 'right-container');
  let title1 = document.createElement('h4');
  title1.textContent = "Select Category"
  let select = document.createElement("select");
  select.options.add( new Option("Select a NEWS Channel",null) );
  select.options.add( new Option("BBC","BBC") );
  select.options.add( new Option("CNBC","CNBC") );
  select.options.add( new Option("IndiaToday","IndiaToday") );
  select.options.add( new Option("TV9","TV9") );
  select.options.add( new Option("TV5","TV5") );
  select.options.add( new Option("FoxNews","FoxNews") );
  select.options.add( new Option("Republic","Republic") );
  select.options.add( new Option("AajTak","AajTak") );
  select.style.width="50%"
  let title2 = document.createElement('h4');
  title2.textContent = "Subscribe"
  let check=document.createElement('div');
  check.setAttribute('class','check');
  let input = document.createElement("input");
  input.setAttribute('id','email');
  input.type = "text";
  let btn = document.createElement('button')
  btn.innerHTML="Subscribe";
  btn.setAttribute('id','btn-email');
  btn.addEventListener("click", emailSave);
  check.appendChild(input);
  check.appendChild(btn);
  right_container.appendChild(title1);
  right_container.appendChild(select);
  right_container.appendChild(title2);
  right_container.appendChild(check);
  fullContainer.appendChild(right_container);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val);
  }
}
  function setLeftContent(){
    for (var i=0;i<1;i++){
       let card = document.createElement('div');
       card.setAttribute('class', 'box');
       let image = document.createElement('img');
       image.src="resource/download.png";
       image.setAttribute('class','image');
       let right = document.createElement('div');
       right.setAttribute('class','vertical');
       let title = document.createElement('h4')
       title.textContent = "SAMPLE NEWS HEADING"
       let metaDisc = document.createElement('h6')
       metaDisc.setAttribute('class','metadisc')
       metaDisc.setAttribute('id','meta')
       metaDisc.style.fontStyle = "italic";
       metaDisc.textContent = "created at 21 July 2019"
       let description = document.createElement('p');
       description.setAttribute('class','description');
       description.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
       let btn = document.createElement('button')
       btn.setAttribute('id',i);
       btn.innerHTML="Continue Reading";
       btn.setAttribute('class','btncontinue')
       let horizontalline = document.createElement("HR");
       right.appendChild(title);
       right.appendChild(metaDisc);
       right.appendChild(description);
       right.appendChild(btn);
       card.appendChild(image)
       card.appendChild(right)
       container.appendChild(card);
       container.appendChild(horizontalline);
       fullContainer.appendChild(container);
     }
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
    let topTagItalic=document.createElement('i');
    topTagItalic.textContent="  yet Another Newsfeed";
    headerBox.appendChild(toptag);
    headerBox.appendChild(topTagItalic);
    let header = document.querySelector('header');
    header.appendChild(headerBox);
    let footerTag=document.createElement('p');
    footerTag.setAttribute('id','footertag');
    var str = " \u00A9 NewsFeed 2019 ";
    footerTag.textContent=str;
    let foot = document.querySelector('footer');
    foot.appendChild(footerTag);
    app.prepend(appBody);
    appBody.append(fullContainer);
    setLeftContent();
    setRightContent();
    document.addEventListener("click", clicked(this));
}
window.onload = init;
