let ul = document.querySelector('ul');
let lists = document.querySelectorAll('ul li');
let sections = document.querySelectorAll('section');
let bodyImg = document.querySelector('body');

let bacgroundArr = ['/img/background/earth.jpg', '/img/background/destination.jpg', '/img/background/destination2.jpg', '/img/background/destination3.jpg'];

function showTabOrCloseTab(i) {
    bodyImg.style.cssText = `background-image: url(${bacgroundArr[i]})`

    lists.forEach(elem => {
        elem.classList.remove('active');
    });
    lists[i].classList.add('active');

    sections.forEach(elem => {
        elem.classList.remove('active');
    })
    sections[i].classList.add('active');
}

ul.addEventListener('click', (e) => {
    lists.forEach((item, index) => {
        if (e.target === item) {
            showTabOrCloseTab(index);
        };
    });
});
