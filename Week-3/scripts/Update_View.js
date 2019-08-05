function changeContent(container,fullContainer){
  let data=fullContainer.data,
  card;
  container.innerHTML = '';
  for(index in data.articles){
    card= document.createElement('div');
    createLeftCard(card,data.articles[index]);
    container.appendChild(card);
    container.appendChild(horizontalLine);
  }
  card.style.paddingBottom='40px';
}
function setRightContent(fullContainer,container){
  let rightContainer = document.createElement('div'),
  categoryTitle = document.createElement('h4'),
  select = document.createElement('select');

  rightContainer.setAttribute('class', 'right-container');
  categoryTitle.textContent =selectCategoryText;
  select.setAttribute('id','ddlnewschannel');
  fillDropDownNewsChannelList(select);
  rightContainer.appendChild(categoryTitle);
  rightContainer.appendChild(select);
  fullContainer.appendChild(rightContainer);
  select.onchange = () => {
    let val=select.value;
    select.options[0].disabled = true;
    getNewsData(val,fullContainer,container);
  }
}
function createLeftCard(card,info){
  let image = document.createElement('img'),
  rightSide = document.createElement('div'),
  title = document.createElement('h4'),
  metaDisc = document.createElement('h6'),
  description = document.createElement('p'),
  btn = document.createElement('button')
  content = info.content,
  contentHead=info.title,
  horizontalLine = document.createElement('hr');

  card.setAttribute('class', 'box');
  image.setAttribute('class','image');
  image.src=info.urlToImage;
  rightSide.setAttribute('class','vertical');
  title.textContent = info.title;
  metaDisc.setAttribute('class','metadisc');
  metaDisc.setAttribute('id','meta');
  metaDisc.textContent = info.publishedAt;
  description.setAttribute('class','description')
  description.textContent = info.description;
  btn.setAttribute('id',index);
  btn.innerHTML=buttonText;
  if(content){
    btn.data=content;
    btn.heading=contentHead;
  } else{
    btn.data=info.description;
    btn.heading=contentHead;
  }
  btn.setAttribute('class','btncontinue');
  rightSide.appendChild(title);
  rightSide.appendChild(metaDisc);
  rightSide.appendChild(description);
  rightSide.appendChild(btn);
  card.appendChild(image)
  card.appendChild(rightSide);
}
function getNewsData(val,fullContainer,container){
  let newsUrl=`${url}source=${val}`;
  setLeftContent(fullContainer,container,newsUrl);
}
function fillDropDownNewsChannelList(select){
  select.options.add( new Option(defaultSelectChannelText,"") );
  for(item of newsChannel){
    select.options.add( new Option(item,item) );
  }
}
