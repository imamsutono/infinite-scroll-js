var data = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24'];
var list = document.getElementById('list');

infinite({
  element: list,
  data: data,
  dataShowOnStart: 10,
  dataShow: 5,
  onScrollEnd: renderElement
});

function renderElement(data) {
  var box = document.createElement('div');
  box.classList.add('box');
  box.innerText = data;
  document.getElementById('list').appendChild(box);
}
