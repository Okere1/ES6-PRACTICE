// Javascript Nuggets
// You could write a function that checks all your html elements to see if any class or id is written wrongly
// This is to avoid bugs in the late stage of your project. EXAMPLE

const heading = document.querySelector('.heading')
console.log(heading);

const listItems = document.querySelectorAll('.list-Item')
console.log(listItems);

const getElement = (selector)=>{
const el = document.querySelector(selector)
if (el) return selector
throw new Error(`Please double check selector : ${selector}`)
}

console.log(getElement('.heading'));

//Also note that to do this in a way that we'll specially check for list boxes
// we could create another argument to check for true and false. EXAMPLE


const getElement2 = (selector, isList)=>{
    if(isList){
        const el = [...document.querySelectorAll(selector)] // Array.from could also be used
        if(el < 1){
        throw new Error(`Please double check selector : ${selector}`)
            
        }
    }
    const el = document.querySelector(selector)
    if (el) return selector
    throw new Error(`Please double check selector : ${selector}`)
    }
    
    console.log(getElement2('.heading'));
    console.log(getElement2('.list-Ite', true));


// DOING SAME THING WITH A SHORTER LINE OF CODE
 const getElement3 = (selector, isList)=>{
 const el = isList?[...document.querySelectorAll(selector)] //isList? means if isList is true
 :document.querySelector(selector)// : means if the first statement is not true run this
 // Generally it just means run this or this

// not a list - exist or not
// list - empty or not

if(!isList && el ) return el
if(isList && !el.length < 1) return el

// YOU COULD USE THIS OR USE THE OR OPERATOR TO JOIN THEM UP IN ONE LINE

if(!isList && el || isList && !el.length < 1) return el

throw new Error(`Please double check selector : ${selector}`)

}
