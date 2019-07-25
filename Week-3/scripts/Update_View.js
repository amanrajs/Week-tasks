function changeContent(val){
    let data=popup.data;
    let similar=0;
  container.innerHTML = '';
    let size=data.articles.length;
    let card;
  for(index in data.articles){
    if(data.articles[index].source.name===val){
       card= document.createElement('div');
      card.setAttribute('class', 'box');
      let image = document.createElement('img');
      image.setAttribute('class','image');
      image.src=data.articles[index].urlToImage;
      let rightSide = document.createElement('div');
      rightSide.setAttribute('class','vertical');
      let title = document.createElement('h4')
      title.textContent = data.articles[index].title;
      let metaDisc = document.createElement('h6');
      metaDisc.setAttribute('class','metadisc');
      metaDisc.setAttribute('id','meta');
      metaDisc.textContent = data.articles[index].publishedAt;
      let description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = data.articles[index].description;
      let btn = document.createElement('button');
      let content = data.articles[index].content;
      let contentHead=data.articles[index].title;
      if(content){
      btn.data=content;
      btn.heading=contentHead;
      }
      else{
      btn.data=data.articles[index].description;
      btn.heading=contentHead;
      }
      btn.setAttribute('id',index);
      btn.innerHTML="Continue Reading";
      btn.setAttribute('class','btncontinue');
      let horizontalLine = document.createElement("HR");
      rightSide.appendChild(title);
      rightSide.appendChild(metaDisc);
      rightSide.appendChild(description);
      rightSide.appendChild(btn);
      card.appendChild(image)
      card.appendChild(rightSide)
      container.appendChild(card);
      if(Number(index)===Number(size-1)){
        console.log
        card.style.paddingBottom='40px';
      }
      container.appendChild(horizontalLine);
    }
  }
  card.style.paddingBottom='40px';
}
function fullContent(data){
  container.innerHTML = '';
  let size=data.articles.length;
  for(index in data.articles ){
      let card = document.createElement('div');
      card.setAttribute('class', 'box');
      let image = document.createElement('img');
      image.setAttribute('class','image');
      image.src=data.articles[index].urlToImage;
      let rightSide = document.createElement('div');
      rightSide.setAttribute('class','vertical');
      let title = document.createElement('h4')
      title.textContent = data.articles[index].title;
      let metaDisc = document.createElement('h6');
      metaDisc.setAttribute('class','metadisc');
      metaDisc.setAttribute('id','meta');
      metaDisc.textContent = data.articles[index].publishedAt;
      let description = document.createElement('p');
      description.setAttribute('class','description')
      description.textContent = data.articles[index].description;
      let btn = document.createElement('button');
      btn.setAttribute('id',index);
      btn.innerHTML="Continue Reading";
      let content = data.articles[index].content;
      let contentHead=data.articles[index].title;
      if(content){
      btn.data=content;
      btn.heading=contentHead;
      }
      else{
      btn.data=data.articles[index].description;
      btn.heading=contentHead;
      }
      btn.setAttribute('class','btncontinue');
      let horizontalLine = document.createElement("HR");
      rightSide.appendChild(title);
      rightSide.appendChild(metaDisc);
      rightSide.appendChild(description);
      rightSide.appendChild(btn);
      card.appendChild(image)
      card.appendChild(rightSide)
      container.appendChild(card);
      if(Number(index)===Number(size-1)){
        card.style.paddingBottom='40px';
      }
      container.appendChild(horizontalLine);
    }
}
