function setRightContent(article_data,fullContainer,container){
  let rightContainer = document.createElement('div'),
  categoryTitle = document.createElement('h4'),
  select = document.createElement('select'),
  datas=[];

  rightContainer.setAttribute('class', 'right-container');
  categoryTitle.textContent =selectCategoryText;
  select.setAttribute('id','ddlnewschannel');
  select.options.add( new Option(defaultSelectChannelText,null) );
  for(item in article_data.articles){
    if(datas.indexOf(article_data.articles[item].source.name)!==-1){
      continue;
    }
    else{
      select.options.add( new Option(article_data.articles[item].source.name,article_data.articles[item].source.name) );
      datas.push(article_data.articles[item].source.name);
    }
  }
  rightContainer.appendChild(categoryTitle);
  rightContainer.appendChild(select);
  fullContainer.appendChild(rightContainer);
  select.options[0].disabled = true;
  select.onchange = () => {
    let val=select.value;
    changeContent(val,fullContainer,container);
  }
}
function setLeftContent(fullContainer,container){
  let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ac1fd7a9fc1342abb913e554a9525d85&pageSize=20`;
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    fullContainer.data=data;
    fullContent(data,container);
    setRightContent(data,fullContainer,container);
  })
  .catch(function(error) {
  });
  fullContainer.appendChild(container);
  }
