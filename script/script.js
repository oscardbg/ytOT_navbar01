document.addEventListener('DOMContentLoaded', init);

function init(){
    const btn = document.querySelector('.menu');
    const list = document.querySelector('#list');

    btn.onclick = () => {
        list.classList.toggle('active');
    }
   
    const menu = document.querySelector('nav > ul');

    menu.addEventListener('click', e => {        
        
        let smenu = e.target.parentNode;
        
        if(smenu.childNodes[1]){
            smenu.classList.toggle('active');
        }
    })
}