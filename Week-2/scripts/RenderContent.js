function setLeftContent(fullContainer,container){
    let card = document.createElement('div');
    createLeftCard(card);
    addDivToContainer(card,container,fullContainer);
}

function setRightContent(fullContainer,container){
  let right_container = document.createElement('div');
  createRightCard(right_container,container);
  fullContainer.appendChild(right_container);

}
function changeContent(val,container){
  container.innerHTML = '';
  for(item in article_data){
    if(article_data[item].postCategory===val){
      let card = document.createElement('div');
      createLeftCard(card,article_data[item]);
      container.appendChild(card);
      addDivToContainer(card,container);
    }
  }
}
function createLeftCard(card,channelSpecificata){
  let image = document.createElement('img'),
  right = document.createElement('div'),
  title = document.createElement('h4'),
  metaDisc = document.createElement('h6'),
  description = document.createElement('p'),
  btn = document.createElement('button');
  card.setAttribute('class', 'box');
  image.setAttribute('class','image');
  right.setAttribute('class','vertical');
  metaDisc.setAttribute('class','metadisc');
  metaDisc.setAttribute('id','meta');
  description.setAttribute('class','description');
  btn.setAttribute('id',0);
  if(channelSpecificata){
    title.textContent =  channelSpecificata.postTitle;
    metaDisc.textContent =  channelSpecificata.postDate;
    description.textContent =  channelSpecificata.postDesc;
  } else{
    title.textContent = defaultTitle;
    metaDisc.textContent = defaultDescription;
    description.textContent = defaultContent;
  }
  image.src=imageSource;
  btn.innerHTML=buttonText;
  btn.setAttribute('class','btncontinue');
  right.appendChild(title);
  right.appendChild(metaDisc);
  right.appendChild(description);
  right.appendChild(btn);
  card.appendChild(image);
  card.appendChild(right);
}
function createRightCard(right_container,container){
  let titleSelectCategory = document.createElement('h4'),
  select = document.createElement('select'),
  subscribeTitle = document.createElement('h4'),
  check=document.createElement('div'),
  input = document.createElement('input'),
  btn = document.createElement('button');
  right_container.setAttribute('class', 'right-container');
  titleSelectCategory.textContent = selectCategoryText;
  select.setAttribute('id','ddlSelect');
  select.options.add( new Option(defaultSelectChannelText,null));
  fillDropDownNewsChannelList(select);
  select.onchange = () => {
    select.options[0].disabled = true;
    let val=select.value;
    changeContent(val,container);
  }
  subscribeTitle.textContent = subscribeText;
  check.setAttribute('class','check');
  input.setAttribute('id','email');
  input.type = 'text';
  btn.innerHTML=subscribeText;
  btn.setAttribute('id','btn-email');
  btn.addEventListener('click', emailSave);
  check.appendChild(input);
  check.appendChild(btn);
  right_container.appendChild(titleSelectCategory);
  right_container.appendChild(select);
  right_container.appendChild(subscribeTitle);
  right_container.appendChild(check);
}
function fillDropDownNewsChannelList(select){
  let data=[];
  for(item in article_data){
    if(data.indexOf(article_data[item].postCategory)!==-1){
      continue;
    } else{
      select.options.add( new Option(article_data[item].postCategory,article_data[item].postCategory) );
      data.push(article_data[item].postCategory);
    }
  }
}
function addDivToContainer(card,container,fullContainer){
  let horizontalline = document.createElement('HR');
  container.appendChild(card);
  container.appendChild(horizontalline);
  if(fullContainer){
    fullContainer.appendChild(container);
  }
}
