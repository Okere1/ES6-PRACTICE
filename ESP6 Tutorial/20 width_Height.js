// Javascrip Nuggets
// Width/Height - Window, any element
// innerWidth - window
// getBoundingClientRect() - Use to get the dimension of any element


console.log('height', window.innerHeight); 
console.log('width',window.innerWidth);

// The window. gives you access to the browsers window data (innerHeight, innerWidth) like height width etc 


const btn = document.querySelector('btn')
const box = document.querySelector('.box')

btn.addEventListener('click', ()=>{
 const dimensions = box.getBoundingClientRect()
 console.log(dimensions);
})

