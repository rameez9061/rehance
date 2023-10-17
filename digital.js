let items = document.getElementById('item1');
let gird = document.getElementsByClassName('grid');

items.addEventListener('mouseover', function expand() {

    items.style.flexGrow = '2 ';
    items.style.transition = '1s all ease';

    // items.style.borderRadius = '4rem';
})

items.addEventListener('mouseout', function expand() {

    items.style.flexGrow = '0';
    // items.style.borderRadius = '0rem';


})


// this is for our 2nd item of the grid 


let items2 = document.getElementById('item2');
let gird2 = document.getElementsByClassName('grid');

items2.addEventListener('mouseover', function expand() {

    items2.style.flexGrow = '2';
    items2.style.transition = '1s all ease';

    // items2.style.borderRadius = '4rem';
})

items2.addEventListener('mouseout', function expand() {

    items2.style.flexGrow = '0';
    // items2.style.borderRadius = '0rem';


})

// this is for our third item of the grid 


let items3 = document.getElementById('item3');
let gird3 = document.getElementsByClassName('grid');

items3.addEventListener('mouseover', function expand() {

    items3.style.flexGrow = '2';
    items3.style.transition = '1s all ease';

    // items3.style.borderRadius = '4rem';
})

items3.addEventListener('mouseout', function expand() {

    items3.style.flexGrow = '0';
    // items3.style.borderRadius = '0rem';


})




// this is for our fourth item in grid 


let items4 = document.getElementById('item4');

let gird4 = document.getElementsByClassName('grid');

items4.addEventListener('mouseover', function expand() {

    items4.style.flexGrow = '2';
    items4.style.transition = '1s all ease';

    // items4.style.borderRadius = '4rem';
    items3.style.flexShrink = '1'
})

items4.addEventListener('mouseout', function expand() {

    items4.style.flexGrow = '0';
    // items4.style.borderRadius = '0rem';


})






// lets design some lists by underlining the points


let span = document.getElementById('sp1');
let image = document.querySelector('#sp1>img');
let th2 = document.getElementById('th2');

span.addEventListener('mouseover', function grow() {

    image.style.display = 'inline';
    th2.style.display = 'none';

})



span.addEventListener('mouseout', function grow() {

    image.style.display = 'none';
    th2.style.display = 'inline';

})



// lets design the customers portion of the headings 

let span2 = document.getElementById('sp2');
let image2 = document.querySelector('#sp2>img');
let th3 = document.getElementById('th3');

span2.addEventListener('mouseover', function grow() {

    image2.style.display = 'inline';
    th3.style.display = 'none';

})



span2.addEventListener('mouseout', function grow() {

    image2.style.display = 'none';
    th3.style.display = 'inline';

})





// lets design page sixer images 

let img = document.querySelector('#sixer>img');

let box = document.getElementById('sixer');

box.addEventListener('mouseout', function less() {

    img.style.width = '0';
    // img.style.transition = '1.5s all ease';
})

box.addEventListener('mouseover', function less() {

    img.style.width = '300px';
    img.style.transition = '1s all ease';
})
// lets design page sixer2 images 

let img2 = document.querySelector('#sixer2>img');

let box2 = document.getElementById('sixer2');

box2.addEventListener('mouseout', function less() {

    img2.style.width = '0';
    // img.style.transition = '1.5s all ease';
})

box2.addEventListener('mouseover', function less() {

    img2.style.width = '300px';
    img2.style.transition = '1s all ease';
})
// lets design page sixer3 images 

let img3 = document.querySelector('#sixer3>img');

let box3 = document.getElementById('sixer3');

box3.addEventListener('mouseout', function less() {

    img3.style.width = '0';
    // img.style.transition = '1.5s all ease';
})

box3.addEventListener('mouseover', function less() {

    img3.style.width = '300px';
    img3.style.transition = '1s all ease';
})








// let circle = document.getElementById('circle1');
// document.addEventListener('mousemove', function(e){

//     circle.style.top = e.pageY +"px";
//     circle.style.left = e.pageX +"px";
// })




// lets design some text moving in upward direction

// let alag =document.getElementById('alag');
let tag = document.getElementById('tag1');
let soop = document.getElementById('soop');
let soop2 = document.getElementById('soop1');

tag.addEventListener('mouseover', function () {

    soop.style.transform = 'translateY(-2vw)';
    soop2.style.transform = 'translateY(-2vw)';
    soop.style.transition = '0.3s all ease-out';
})
tag.addEventListener('mouseout', function () {

    soop.style.transform = 'translateY(0)';
    soop2.style.transform = 'translateY(0)';
})













// lets follow the circle 


let circle = document.querySelector('.circle');

let point = document.querySelector('.point');

window.addEventListener('mousemove', function increase(dets) {
    // console.log(dets.clientX, dets.clientY);

    let mouseX = dets.clientX;
    let mouseY = dets.clientY;



    circle.style.left = mouseX + 'px';
    circle.style.top = mouseY + 'px';
    // circle.style.transform = 'scale(4)';
})


let paragraph = document.getElementById('paragraph');

point.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    circle.style.transform = 'translate(-50%, -50%) scale(4)  ';
    circle.style.animation = 'rotate 3s linear infinite';
});

point.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';


});


// -------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------
// ================================================================================
// ========================================================
// adding string to the circle tomorrow Inshallah
let heading = document.getElementById('circleh1');

items.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    heading.style.display = 'block';
    heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'red';
    circle.style.border = 'none';
    // circle.style.animation = 'rotate 3s linear infinite';
});

items.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';
    heading.style.display = 'none';
});





// 2nd item ---------------------------------------------------------

items2.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    heading.style.display = 'block';
    heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'antiquewhite';
    circle.style.border = 'none';
    // circle.style.animation = 'rotate 3s linear infinite';
});

items2.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';
    heading.style.display = 'none';
});


// 3rd item ----------------------------------------------------------
// ----------------------------------------------------------------------
items3.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    heading.style.display = 'block';
    heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'aqua';
    circle.style.border = 'none';
    // circle.style.animation = 'rotate 3s linear infinite';
});

items3.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';
    heading.style.display = 'none';
});


// 4th item ----------------------------------------------------------------
// --------------------------------------------------------------------------
items4.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    heading.style.display = 'block';
    heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'purple';
    circle.style.border = 'none';
    // circle.style.animation = 'rotate 3s linear infinite';
});

items4.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';
    heading.style.display = 'none';
});

// ===============================================================================
//           ======================================================= 
//                   ========================================
//                       ============================
//                          =====================
//                              =============
//                                ========
//                                  ===



let main = document.querySelector('.first');
let main2 = document.querySelector('.third');
let main3 = document.querySelector('.second');
main.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    // heading.style.display = 'block';
    // heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'purple';
    circle.style.border = 'none';
    circle.style.zindex = '-1';
    // circle.style.animation = 'rotate 3s linear infinite';
});

main.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';

    heading.style.display = 'none';
});
main2.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    // heading.style.display = 'block';
    // heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'orange';
    circle.style.border = 'none';
    circle.style.zindex = '-1';
    // circle.style.animation = 'rotate 3s linear infinite';
});

main2.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';

    heading.style.display = 'none';
});
main3.addEventListener('mouseover', function () {
    console.log('Mouse over point');
    // heading.style.display = 'block';
    // heading.style.fontSize = '0.4rem';
    circle.style.transform = 'translate(-50%, -50%) scale(5)  ';
    circle.style.backgroundColor = 'brown';
    circle.style.border = 'none';
    circle.style.zindex = '-1';
    // circle.style.animation = 'rotate 3s linear infinite';
});

main3.addEventListener('mouseout', function () {
    console.log('Mouse out of point');
    circle.style.transform = 'translate(-50%, -50%) scale(1)  ';
    // circle.style.animation = 'none';
    circle.style.backgroundColor = 'lightgrey';

    heading.style.display = 'none';
});








// lets work a button 

let btn = document.getElementById('btnp');
let para = document.getElementById('paragraph');






// para.addEventListener('mouseover', function(){

//     circle.style.borderRadius = '2%';
//     // circle.style.transform = 'scale(2)';
//     // circle.style.border = '2px solid lightgrey';
// })

btn.addEventListener('click', function run() {

    if (para.style.display != 'none') {
        onclick(para.style.display = 'none');
    }
    else {
        onclick(para.style.display = 'block');
    }
})



let btn2 = document.getElementById('btnp2');
let para2 = document.getElementById('paragraph2');

btn2.addEventListener('click', function run() {

    if (para2.style.display != 'none') {
        onclick(para2.style.display = 'none');
    }
    else {
        onclick(para2.style.display = 'block');
    }
})









// lets design the third page for hovered circle 

// ====================================================
// ====                 ===========       ============
//   =====================         =========          
//   -================================================

let th = document.getElementById('th');
let slide = document.getElementById('slide');


th.addEventListener('mouseover', function () {

    circle.style.transform = 'scale(6)';
    circle.style.backgroundColor = 'orange';
    circle.style.border = 'none';
})
th.addEventListener('mouseout', function () {

    circle.style.transform = 'scale(1)';
    circle.style.backgroundColor = 'lightgrey';
    circle.style.border = '2px solid aqua';
})


slide.addEventListener('mouseover', function () {

    circle.style.transform = 'translate(-50%,-50%) scale(6)';
    circle.style.backgroundColor = 'orange';
    circle.style.border = 'none';
    heading.style.display = 'block';
    heading.style.fontSize = '0.4rem';
    heading.style.color = 'white';
    circle.style.zindex = '2';



})
slide.addEventListener('mouseout', function () {

    circle.style.transform = 'scale(1)';
    circle.style.backgroundColor = 'lightgrey';
    circle.style.border = '2px solid aqua';
    heading.style.display = 'none';
})








paragraph.addEventListener('mouseover', function () {

    paragraph.style.backgroundColor = 'red';
    circle.style.border = '2px solid yellow';
});
paragraph.addEventListener('mouseout', function () {

    paragraph.style.backgroundColor = '#ffff';
    circle.style.border = '2px solid aqua';
});





main2.addEventListener('mouseover', function () {

    main2.style.transform = 'translateX(200px)';
    main2.style.transition = '1s all ease-in-out ';
})

