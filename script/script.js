document.addEventListener('DOMContentLoaded', init);

function init(){
    const btn = document.querySelector('.menu');
    const list = document.querySelector('#list');

    btn.onclick = () => {
        list.classList.toggle('active');
    }
}