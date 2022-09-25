const menu = document.querySelector('#menu');

menu.addEventListener('click', function(){
    const menuList = document.querySelector('#menuList');

    menuList.classList.toggle('menuOff');
    menuList.classList.toggle('menuOn');
});

