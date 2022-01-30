// Javascript Nuggets -  Promises Example
// .first - after 1s first red;



const btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
addColor(1000, '.first', 'red').then((data)=>{console.log(data);}).catch((err)=>{
    console.log(err);})
})

function addColor(time,selector,color){
    const element = document.querySelector(selector)
    return new Promise((resolve,reject)=>{
        if(element){
            setTimeout(() => {
                element.style.color = color
            }, time);
            resolve('Everything worked fine')
        }
        else{
            reject(`There is no such element as :" ${selector}"`)
        }
    })

}