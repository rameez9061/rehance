
function slider() {


  let tags = document.getElementById('tags');
  let btn = document.getElementById('btn');

  btn.addEventListener('click', function () {
    if (tags.style.transform == 'translateX(-15rem)' || tags.style.transform === '') {
      tags.style.transform = 'translateX(0)';
      console.log('hello2');

    }

    else {

      tags.style.transform = 'translateX(-15rem)';
      console.log('hello');

    }
  })
} slider();





let tags = document.getElementById('tags1');
let buy = document.getElementById('buy');
let money = document.getElementById('money');
let mini = document.getElementById('mini');
let circle1 = document.getElementById('circle1');


tags.addEventListener('mouseover', function () {

  tags.style.transform = 'scale(1.1)';
  tags.style.backgroundColor = '#62bdfc';
  tags.style.color = 'white';
  mini.style.backgroundColor = '#9ec3e2';
  money.style.display = 'none';
  buy.style.display = 'block';
  circle1.style.backgroundColor = 'rgb(113 214 235)';
})
tags.addEventListener('mouseout', function () {

  tags.style.transform = 'scale(1)';
  tags.style.backgroundColor = 'white';
  tags.style.color = 'black';
  mini.style.backgroundColor = 'white';
  money.style.display = 'block';
  buy.style.display = 'none';
  circle1.style.backgroundColor = 'rgb(132 144 255 / 10%)';
})
let tags1 = document.getElementById('tags2');
let buy1 = document.getElementById('buy2');
let money1 = document.getElementById('money2');
let mini1 = document.getElementById('mini2');
let circle2 = document.getElementById('circle2');


tags1.addEventListener('mouseover', function () {

  tags1.style.transform = 'scale(1.1)';
  tags1.style.backgroundColor = '#62bdfc';
  tags1.style.color = 'white';
  mini1.style.backgroundColor = '#9ec3e2';
  money1.style.display = 'none';
  buy1.style.display = 'block';
  circle2.style.backgroundColor = 'rgb(113 214 235)';
})

tags1.addEventListener('mouseout', function () {

  tags1.style.transform = 'scale(1)';
  tags1.style.backgroundColor = 'white';
  tags1.style.color = 'black';
  mini1.style.backgroundColor = 'white';
  money1.style.display = 'block';
  buy1.style.display = 'none';
  circle2.style.backgroundColor = 'rgb(132 144 255 / 10%)';
})
let tags3 = document.getElementById('tags3');
let buy3 = document.getElementById('buy3');
let money3 = document.getElementById('money3');
let mini3 = document.getElementById('mini3');
let circle3 = document.getElementById('circle3');


tags3.addEventListener('mouseover', function () {

  tags3.style.transform = 'scale(1.1)';
  tags3.style.backgroundColor = '#62bdfc';
  tags3.style.color = 'white';
  mini3.style.backgroundColor = '#9ec3e2';
  money3.style.display = 'none';
  buy3.style.display = 'block';
  circle3.style.backgroundColor = 'rgb(113 214 235)';
})
tags3.addEventListener('mouseout', function () {

  tags3.style.transform = 'scale(1)';
  tags3.style.backgroundColor = 'white';
  tags3.style.color = 'black';
  mini3.style.backgroundColor = 'white';
  money3.style.display = 'block';
  buy3.style.display = 'none';
  circle3.style.backgroundColor = 'rgb(132 144 255 / 10%)';
})
let tags4 = document.getElementById('tags4');
let buy4 = document.getElementById('buy4');
let money4 = document.getElementById('money4');
let mini4 = document.getElementById('mini4');
let circle4 = document.getElementById('circle4');


tags4.addEventListener('mouseover', function () {

  tags4.style.transform = 'scale(1.1)';
  tags4.style.backgroundColor = '#62bdfc';
  tags4.style.color = 'white';
  mini4.style.backgroundColor = '#9ec3e2';
  money4.style.display = 'none';
  buy4.style.display = 'block';
  circle4.style.backgroundColor = 'rgb(113 214 235)';
})
tags4.addEventListener('mouseout', function () {

  tags4.style.transform = 'scale(1)';
  tags4.style.backgroundColor = 'white';
  tags4.style.color = 'black';
  mini4.style.backgroundColor = 'white';
  money4.style.display = 'block';
  buy4.style.display = 'none';
  circle4.style.backgroundColor = 'rgb(132 144 255 / 10%)';
})



let body = document.getElementById('body');
let gol = document.getElementById('gol');

gol.addEventListener('click', function () {

  if (body.classList.contains('lightmode') || body.className === '') {

    body.className = 'darkmode';
    gol.style.backgroundColor = 'orange';
    gol.style.color = 'white';
    outer.style.backgroundColor = 'orange';
    inner.style.transform = 'translateX(1.5rem)';
  } else {

    body.className = 'lightmode';
    gol.style.backgroundColor = 'white';
    gol.style.color = 'black';
    
    outer.style.backgroundColor = 'grey';
    inner.style.transform = 'translateX(0rem)';
  }
})





var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
      delay: 2500,
      disableOnInteraction: false,
  },
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
  },
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
});
