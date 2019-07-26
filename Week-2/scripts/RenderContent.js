function setRightContent(fullContainer,container){
  let right_container = document.createElement('div'),
  titleSelectCategory = document.createElement('h4'),
  select = document.createElement('select'),
  subscribeTitle = document.createElement('h4'),
  check=document.createElement('div'),
  input = document.createElement('input'),
  btn = document.createElement('button');

  right_container.setAttribute('class', 'right-container');
  titleSelectCategory.textContent = selectCategoryText;
  select.setAttribute('id','ddlSelect');
  select.options.add( new Option(defaultSelectChannelText,null));
  let data=[];
  for(item in article_data){
    if(data.indexOf(article_data[item].postCategory)!==-1){
      continue;
    }
    else{
      select.options.add( new Option(article_data[item].postCategory,article_data[item].postCategory) );
      data.push(article_data[item].postCategory);
    }
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
  fullContainer.appendChild(right_container);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val,container);
  }
}
function setLeftContent(fullContainer,container){
    let card = document.createElement('div'),
    image = document.createElement('img'),
    right = document.createElement('div'),
    title = document.createElement('h4'),
    metaDisc = document.createElement('h6'),
    description = document.createElement('p'),
    btn = document.createElement('button'),
    horizontalline = document.createElement('HR');

    card.setAttribute('class', 'box');
    image.src=imageSource;
    image.setAttribute('class','image');
    right.setAttribute('class','vertical');
    title.textContent = defaultTitle;
    metaDisc.setAttribute('class','metadisc');
    metaDisc.setAttribute('id','meta');
    metaDisc.textContent = defaultDescription;
    description.setAttribute('class','description');
    description.textContent = defaultContent;
    btn.setAttribute('id',0);
    btn.innerHTML=buttonText;
    btn.setAttribute('class','btncontinue');
    right.appendChild(title);
    right.appendChild(metaDisc);
    right.appendChild(description);
    right.appendChild(btn);
    card.appendChild(image);
    card.appendChild(right);
    container.appendChild(card);
    container.appendChild(horizontalline);
    fullContainer.appendChild(container);
}
