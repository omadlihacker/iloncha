let i = 0;
let j = 0;
const box = document.getElementById('box');
const body = document.querySelector('body');

const item = document.getElementById('item');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');

console.log(item);


body.addEventListener('keypress', (e) =>{
    
    if(e.key == 'w' && !(i == -220)){
        i -= 5;
        box.style.transform =  `translate(${j}px, ${i}px)`;
        item.style.color = 'red';
        box.style.boxShadow = '0 20px 20px -5px #C3F0EC';
        console.log(i) 
    }

    if(e.key == 's' && !(i == 220)){
        i += 5;
        box.style.transform =  `translate(${j}px, ${i}px)`;
        item4.style.color = 'red'
        box.style.boxShadow = '0 -20px 20px -5px #C3F0EC';
        console.log(i) 
    }

    if(e.key == 'a' && !(j == -220)){
        j-= 5
        box.style.transform =  `translate(${j}px, ${i}px)`;
        item2.style.color = 'red'
        box.style.boxShadow = '20px 0 20px -5px #C3F0EC';
        console.log(j)
    }

    if(e.key == 'd' && !(j == 220)){
        j+= 5
        box.style.transform =  `translate(${j}px, ${i}px)`
        item3.style.color = 'red';
        box.style.boxShadow = '-20px 0 20px -5px #C3F0EC';
        console.log(j, 'j')
    }
})
body.addEventListener('keyup', (e) =>{
    if(e.key == 'w'){
        item.style.color = 'black';
        box.style.boxShadow = '0 0 0 0';
    }
    if(e.key == 'a'){
        item2.style.color = 'black';
        box.style.boxShadow = '0 0 0 0';
    }
    if(e.key == 'd'){
        item3.style.color = 'black';
        box.style.boxShadow = '0 0 0 0';
    }
    if(e.key == 's'){
        item4.style.color = 'black';
        box.style.boxShadow = '0 0 0 0';
    }
})