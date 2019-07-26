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
function changeContent(val,container){
  container.innerHTML = '';
  for(item in article_data){
    if(article_data[item].postCategory===val){
      let card = document.createElement('div'),
      image = document.createElement('img'),
      rightSide = document.createElement('div'),
      title = document.createElement('h4'),
      metaDisc = document.createElement('h6'),
      description = document.createElement('p'),
      btn = document.createElement('button'),
      horizontalLine = document.createElement('HR');

      rightSide.setAttribute('class','vertical');
      card.setAttribute('class', 'box');
      image.setAttribute('class','image');
      image.src=imageSource;
      title.textContent = article_data[item].postTitle;
      metaDisc.setAttribute('class','metadisc');
      metaDisc.setAttribute('id','meta');
      metaDisc.textContent = article_data[item].postDate;
      description.setAttribute('class','description');
      description.textContent = article_data[item].postDesc;
      btn.setAttribute('id',item);
      btn.innerHTML=buttonText;
      btn.setAttribute('class','btncontinue');
      rightSide.appendChild(title);
      rightSide.appendChild(metaDisc);
      rightSide.appendChild(description);
      rightSide.appendChild(btn);
      card.appendChild(image);
      card.appendChild(rightSide);
      container.appendChild(card);
      container.appendChild(horizontalLine);
    }
  }
}
