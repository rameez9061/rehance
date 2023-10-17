// function to run a color change in logo

let span = document.getElementById('span1');
let hed = document.getElementById('hed');
hed.addEventListener('mouseover',function glow(){
    span.style.color = '#73b925';
    span.style.transition ='.5s all ease';
})

// for white color

hed.addEventListener('mouseout',function glow(){
    span.style.color = 'white';
})

// lets design some boxes 

let bacicon = document.querySelector('#bacicon1');
let box = document.getElementById('box1');
let icon = document.querySelector('#bacicon1>i')


// bacicon.forEach(icon =>{

//     box.addEventListener('mouseover',function color(){
//         bacicon.style.backgroundColor = 'white';
//     })
// })


    
    
    box.addEventListener('mouseover',function change(){
        box.style.backgroundColor = '#73b925';
        bacicon.style.backgroundColor = 'white';
        icon.style.color = '#73b925';
        
    })
    
    box.addEventListener('mouseout',function change(){
        box.style.backgroundColor = 'white';
        bacicon.style.backgroundColor = '#73b925';
        icon.style.color = 'white';
        
    })


    let bacicon2 = document.querySelector('#bacicon2');
    let box2 = document.getElementById('box2');
    let icon2 = document.querySelector('#bacicon2>i')

    box2.addEventListener('mouseover',function change(){
        box2.style.backgroundColor = '#73b925';
        bacicon2.style.backgroundColor = 'white';
        icon2.style.color = '#73b925';
        
    })
    
    box2.addEventListener('mouseout',function change(){
        box2.style.backgroundColor = 'white';
        bacicon2.style.backgroundColor = '#73b925';
        icon2.style.color = 'white';
        
    })
    
    
    let bacicon3 = document.querySelector('#bacicon3');
let box3 = document.getElementById('box3');
let icon3 = document.querySelector('#bacicon3>i')
    

box3.addEventListener('mouseover',function change(){
    box3.style.backgroundColor = '#73b925';
    bacicon3.style.backgroundColor = 'white';
    icon3.style.color = '#73b925';
    
})

box3.addEventListener('mouseout',function change(){
    box3.style.backgroundColor = 'white';
    bacicon3.style.backgroundColor = '#73b925';
    icon3.style.color = 'white';
    
})

let bacicon4 = document.querySelector('#bacicon4');
let box4 = document.getElementById('box4');
let icon4 = document.querySelector('#bacicon4>i')
    

box4.addEventListener('mouseover',function change(){
    box4.style.backgroundColor = '#73b925';
    bacicon4.style.backgroundColor = 'white';
    icon4.style.color = '#73b925';
    
})

box4.addEventListener('mouseout',function change(){
    box4.style.backgroundColor = 'white';
    bacicon4.style.backgroundColor = '#73b925';
    icon4.style.color = 'white';
    
})


let bacicon5 = document.querySelector('#bacicon5');
let box5 = document.getElementById('box5');
let icon5 = document.querySelector('#bacicon5>i')
    

box5.addEventListener('mouseover',function change(){
    box5.style.backgroundColor = '#73b925';
    bacicon5.style.backgroundColor = 'white';
    icon5.style.color = '#73b925';
    
})

box5.addEventListener('mouseout',function change(){
    box5.style.backgroundColor = 'white';
    bacicon5.style.backgroundColor = '#73b925';
    icon5.style.color = 'white';
    
})



