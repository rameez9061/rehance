let image  = document.querySelector('#image');
let circle = document.querySelector('.circle');


window.addEventListener('mousemove', function(dets){

   let mouseX = dets.clientX;
   let mouseY = dets.clientY;


   circle.style.left = mouseX+ 'px';
   circle.style.top = mouseY+ 'px';
})

// window.addEventListener('mouseover', function(){

//     circle.style.transform = 'translate(-50%,-50%) scale(0)';
// })

image.addEventListener('mouseover',function(){


    circle.style.transform = 'translate(-50%,-50%) scale(8)';
    circle.style.zIndex = '0';
    console.log('overimage')
  
})
image.addEventListener('mouseout',function(){


    circle.style.transform = 'translate(-50%,-50%) scale(0)';
    circle.style.zIndex = '-3';
})


let mainheading = document.getElementById('mainheading');
let mainpara  = document.getElementById('mainpara');
let video = document.querySelector('.circle video')

mainheading.addEventListener('mouseover',function(){

    circle.style.transform = 'translate(-50%,-50%) scale(8)';
    circle.style.zIndex = '-3';
    console.log('you are over')
})
mainheading.addEventListener('mouseout',function(){

    circle.style.transform = 'translate(-50%,-50%) scale(0)';
    console.log('you are over')
})


mainpara.addEventListener('mouseover',function(){

    circle.style.transform = 'translate(-50%,-50%) scale(8)';
    // mainpara.style.color = 'aqua';
  video.src = 'https://www.shutterstock.com/shutterstock/videos/1103532225/preview/stock-footage-dynamic-lighting-in-a-concept-product-presentation-shoe-d-rendering.webm';
    circle.style.zIndex = '-3';
    console.log('you are over para')
})
mainpara.addEventListener('mouseout',function(){

    circle.style.transform = 'translate(-50%,-50%) scale(0)';
    mainpara.style.color = 'black';
    video.src = 'https://www.shutterstock.com/shutterstock/videos/1103532217/preview/stock-footage-dynamic-lighting-in-a-concept-product-presentation-shoe-d-rendering.webm';
    circle.style.zIndex = '-3';
    console.log('you are over para')
})