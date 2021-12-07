
function focusGood(index){
    var goods = document.getElementsByClassName('flex-catalog-good');
    for(var i=0;i<goods.length;++i){
        goods[i].classList.add('hidden-good');
        goods[i].classList.remove('focused-good');
    }
    setTimeout(function(){
      document.getElementById('focuser-text-'+index).innerText="Узнайте цену у наших операторов!";
      document.getElementById('item'+index).classList.remove('hidden-good');
      document.getElementById('item'+index).classList.add('focused-good');
      document.getElementById('closer'+index).classList.remove('hidden-good');
      document.getElementById('closer'+index).classList.add('focused-closer');
      
      var hiddens = document.getElementsByClassName('hidden-good');
      for(var i=0;i<hiddens.length;++i){
          hiddens[i].style.display='none';
      }
    },600);
}

