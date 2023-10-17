let pages = document.getElementById('pages');

let box = document.querySelector('.box');
function pagesdown() {

    pages.addEventListener('mouseover', function () {
        box.style.display = 'block';
    })
    pages.addEventListener('mouseout', function () {
        box.style.display = 'none';
    })
} pagesdown();


let mainscreen = document.querySelector('.frontbox');
let background = document.getElementById('background');
mainscreen.addEventListener('mouseenter', function () {
    background.style.backgroundImage = 'url(image4.png)';
    background.style.backgroundPosition = 'center';
    background.style.backgroundRepeat = 'no-repeat';
    background.style.backgroundSize = 'cover';
    background.style.filter = 'brightness(0.4)';
})
mainscreen.addEventListener('mouseleave', function () {
    background.style.backgroundImage = 'url(image10.png)';
    background.style.backgroundPosition = 'center';
    background.style.backgroundRepeat = 'no-repeat';
    background.style.backgroundSize = 'cover';
    background.style.filter = 'brightness(0.4)';
})

