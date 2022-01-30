// Javascript Nuggets - Callback Hell

// after 1s first red;
// after 3s second blue;
// after 2s third green;
// IN SEQUENCE


const first =  document.querySelector('.first')
const second =  document.querySelector('.second')
const third =  document.querySelector('.third')

const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
    //console.log('hello world');
    //setTimeout is used when want some action happening at a particular time
    // while setInterval is used to make events happen repeatedly with a certain
    //time differnce
    setTimeout(() => {
        first.style.color = 'red'
    }, 1000);
    setTimeout(() => {
        second.style.color = 'blue'
    }, 3000);
    setTimeout(() => {
        third.style.color = 'green'
    }, 2000);


    // Note that if the case was that the event must happen serially, i.e class
    //'first' shows red in 1sec and after 3sec class 'second' shows blue then after
    //another 2sec class 'third' shows green. To do this just place the setTimeout
    //method of the 'second' class inside the 'first' and the 'third' class inside
    // the 'second' class Example

    setTimeout(() => {
        first.style.color = 'red'
        setTimeout(() => {
            second.style.color = 'blue'
            setTimeout(() => {
                third.style.color = 'green'
            }, 2000);
        }, 3000);
    }, 1000);
    
    
})