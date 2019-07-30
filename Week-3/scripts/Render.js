function setLeftContent(fullContainer,container,newsUrl){
fetch(newsUrl)
.then((resp) => resp.json())
.then(function(data) {
  fullContainer.data=data;
  changeContent(container,fullContainer);
})
.catch(function(error) {
});
}
