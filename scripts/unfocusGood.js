function unfocusGood(index) {
  var hiddens = document.getElementsByClassName('hidden-good');
      for(var i=0;i<hiddens.length;++i){
          hiddens[i].style.display='flex';
      }
  
  var goods = document.getElementsByClassName('flex-catalog-good');
  document.getElementById('item' + index).classList.remove('focused-good');
  
  for (var i = 0; i < goods.length; ++i) {
    goods[i].classList.remove('hidden-good');
  }
  document.getElementById('focuser-text-'+index).innerText='Узнать подробнее';
  document.getElementById('closer' + index).classList.remove('focused-closer');
  document.getElementById('closer' + index).classList.add('hidden-closer');
}