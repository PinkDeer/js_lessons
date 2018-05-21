var text = document.querySelector('#text'); // получить элемент по id

text.onclick = function () { //событие
  //text.style.color = 'red';
  text.innerHTML = 'yeah'; // свойства
  text.className = 'test';
  text.style.color = '#f00';
  text.style.fontSize = '30px';
}
