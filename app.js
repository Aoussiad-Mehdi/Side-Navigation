const container = document.querySelector('.container');
const btn = document.querySelector('.toggle');
const icon = document.querySelector('.toggle button i');
const header = document.querySelector('header');

btn.addEventListener('click', () =>{
    if(icon.className == 'fas fa-bars'){
        icon.className = 'fas fa-times';
        container.style.left = '250px';
        header.style.transform = 'translateX(0px)';
    }else{
        icon.className = 'fas fa-bars';
        container.style.left = '0px';
        header.style.transform = 'translateX(-250px)';
    }

});