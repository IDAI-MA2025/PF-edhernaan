//Menu responsive
var btnMenuOpen = document.getElementById('btnMenuOpen');
var brnMenuClose = document.getElementById('btnMenuClose');
var menubar = document.getElementById('menubar');

btnMenuOpen.addEventListener('click',function(){
    menubar.classList.add('active');
});

btnMenuClose.addEventListener('click',function(){
    menubar.classList.remove('active');

});

var enlaces = document.getElementById('enlaces');
enlaces.addEventListener('click',function(){
    menubar.style.transitionDelay = '0.5s';
    menubar.classList.remove('active');
});