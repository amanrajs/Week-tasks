function changeContent(val,fullContainer,container){
let data=fullContainer.data,
similar=0,
size=data.articles.length,
card;
container.innerHTML = '';
for(index in data.articles){
  if(data.articles[index].source.name===val){
    card= document.createElement('div');
    createLeftCard(card,data.articles[index]);
    container.appendChild(card);
    container.appendChild(horizontalLine);
  }
}
card.style.paddingBottom='40px';
}
function fullContent(data,container){
container.innerHTML = '';
let size=data.articles.length,
card;
for(index in data.articles ){
  card= document.createElement('div');
  createLeftCard(card,data.articles[index]);
  container.appendChild(card);
  container.appendChild(horizontalLine);
  }
  card.style.paddingBottom='40px';
}
function setRightContent(article_data,fullContainer,container){
let rightContainer = document.createElement('div'),
categoryTitle = document.createElement('h4'),
select = document.createElement('select');

rightContainer.setAttribute('class', 'right-container');
categoryTitle.textContent =selectCategoryText;
select.setAttribute('id','ddlnewschannel');
fillDropDownNewsChannelList(select,article_data);
rightContainer.appendChild(categoryTitle);
rightContainer.appendChild(select);
fullContainer.appendChild(rightContainer);
select.onchange = () => {
  let val=select.value;
  select.options[0].disabled = true;
  changeContent(val,fullContainer,container);
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
function fillDropDownNewsChannelList(select,article_data){
  let datas=[];
  for(item in article_data.articles){
    if(datas.indexOf(article_data.articles[item].source.name)!==-1){
      continue;
    } else{
      select.options.add( new Option(article_data.articles[item].source.name,article_data.articles[item].source.name) );
      datas.push(article_data.articles[item].source.name);
    }
  }
}
