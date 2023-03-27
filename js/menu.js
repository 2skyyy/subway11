const menuItem = document.querySelectorAll('.menu_item');


menuItem.forEach(function(item){
   item.onmouseover = function(){
      this.classList.add('active')
   }
   item.onmouseout = function(){
      this.classList.remove('active')
   }
})


// menuItem.onmouseover = function(){
//    menuItem.classList.add('active');
// }
// menuItem.onmouseout = function(){
//    menuItem.classList.remove('active');
// }
