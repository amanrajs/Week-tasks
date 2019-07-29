function setLeftContent(fullContainer,container){
fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  fullContainer.data=data;
  fullContent(data,container);
  fullContainer.appendChild(container);
  setRightContent(data,fullContainer,container);
})
.catch(function(error) {
});
}
