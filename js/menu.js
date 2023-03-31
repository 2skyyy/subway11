const section = document.querySelector('section');
const subLoc = document.querySelector('.sub_loc');
const subLocA = document.querySelector('.sub_loc a');
const show = document.querySelectorAll('.show');
const hide = document.querySelectorAll('.hide');

window.addEventListener('scroll', function(){
   if(window.scrollY > section.offsetTop){  
      subLoc.style.background = 'white';
      subLocA.style.color = 'gray';

   }else{

   }
})








// const menuItem = document.querySelectorAll('.menu_item');


// menuItem.forEach(function(item){
//    item.onmouseover = function(){
//       this.classList.add('active')
//    }
//    item.onmouseout = function(){
//       this.classList.remove('active')
//    }
// })


// // menuItem.onmouseover = function(){
// //    menuItem.classList.add('active');
// // }
// // menuItem.onmouseout = function(){
// //    menuItem.classList.remove('active');
// // }


// const subTxt = document.querySelector('.sub_txt');
