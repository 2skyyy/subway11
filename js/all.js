const sub = document.querySelector('.sub');
sub.onmouseover = function(){
   sub.classList.add('active')
}
sub.onmouseout = function(){
   sub.classList.remove('active')
}