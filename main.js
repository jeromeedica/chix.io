let btn = document.getElementById('btn');

btn.addEventListener('click', () =>{
    const createLi = document.createElement('h1');
    createLi.innerText = prompt('please add your chix on your chixList');
    createLi.style.marginTop = '4px'
    createLi.style.padding = '30px'
    document.querySelector('.ctr').appendChild(createLi);
});


