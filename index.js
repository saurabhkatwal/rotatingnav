const open=document.querySelector('.fa-bars');
const close=document.querySelector('.fa-times');
const contain=document.querySelector('.container');
open.onclick=function(){
    contain.classList.add('show-nav');
}
close.onclick=function(){
    contain.classList.remove('show-nav');
}