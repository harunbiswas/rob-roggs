// float navigation 

let addBtn = document.querySelector('.nav-toggle');
let removeBtn = document.querySelector('.btn-remove')
let nav = document.querySelector('.main-navigation');


addBtn.addEventListener('click', ()=> {
    nav.style.left = "0"
})
removeBtn.addEventListener('click', ()=> {
    nav.style.left = "-35rem"
})


// active navigation 

let li = document.querySelectorAll('.main-navigation-item');
        
        li.forEach(el => {
            el.addEventListener('click', function(){
                document.querySelector('.active').classList.remove('active');
                el.classList.add('active');
            })
        })


// select btn 

let sBtn = document.querySelectorAll('.conspirator-select');

sBtn.forEach(el => {
    el.addEventListener('click', () => {
        el.innerHTML = '&radic; selected'
    })
})
