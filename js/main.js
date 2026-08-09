const btnMenu =  document.querySelector('#toggle');
const menu = document.querySelector('#menu');

btnMenu.addEventListener('click', (e) =>{
  menu.classList.toggle('menu-active');
  console.log('click')
})

document.addEventListener('click', (e) =>{
  if(menu.classList.contains('menu-active')){
    if(!menu.contains(e.target) && !btnMenu.contains(e.target)){
      menu.classList.remove('menu-active');
    }

    if(menu.contains(e.target) && e.target !== menu){
      menu.classList.remove('menu-active');
    }
  }
})