function changeContent(val,fullContainer,container){
    let data=fullContainer.data;
    let similar=0;
    container.innerHTML = '';
    let size=data.articles.length;
    let card;
    for(index in data.articles){
      let btn = document.createElement('button'),
      image = document.createElement('img'),
      rightSide = document.createElement('div'),
      title = document.createElement('h4'),
      metaDisc = document.createElement('h6'),
      description = document.createElement('p'),
      horizontalLine = document.createElement('hr');

      if(data.articles[index].source.name===val){
       card= document.createElement('div');
       card.setAttribute('class', 'box');
       image.setAttribute('class','image');
       image.src=data.articles[index].urlToImage;
       rightSide.setAttribute('class','vertical');
       title.textContent = data.articles[index].title;
       metaDisc.setAttribute('class','metadisc');
       metaDisc.setAttribute('id','meta');
       metaDisc.textContent = data.articles[index].publishedAt;
       description.setAttribute('class','description')
       description.textContent = data.articles[index].description;
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
       btn.innerHTML=buttonText;
       btn.setAttribute('class','btncontinue');
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
   card.style.paddingBottom='40px';
}
function fullContent(data,container){
  container.innerHTML = '';
  let size=data.articles.length;
  for(index in data.articles ){
      let card = document.createElement('div'),
      image = document.createElement('img'),
      rightSide = document.createElement('div'),
      title = document.createElement('h4'),
      metaDisc = document.createElement('h6'),
      description = document.createElement('p'),
      btn = document.createElement('button');

      card.setAttribute('class', 'box');
      image.setAttribute('class','image');
      image.src=data.articles[index].urlToImage;
      rightSide.setAttribute('class','vertical');
      title.textContent = data.articles[index].title;
      metaDisc.setAttribute('class','metadisc');
      metaDisc.setAttribute('id','meta');
      metaDisc.textContent = data.articles[index].publishedAt;
      description.setAttribute('class','description')
      description.textContent = data.articles[index].description;
      btn.setAttribute('id',index);
      btn.innerHTML=buttonText;
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
      let horizontalLine = document.createElement('hr');
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
