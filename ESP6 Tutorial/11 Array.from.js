// Array.from  NOT ON PROTOTYPE i.e the operator should always be used the way it is

// from - returns array object from an object
// with length property or an iterable object
// from - turns array like/ish into array - string, nodeList, Set


const udemy =  'udemy'

console.log(Array.from(udemy));
// This forms a array with each of the letter of the udemy variable, the Array.from method works with any object or array
// with lenght property or can be iterated


const text = document.querySelectorAll('.text') // Access to all element with class 'text'
// Note that this does not produce an array output instead it produces a Nodelist will has to be converted to an array
// before we can use any of our array method to analyze the output

console.log(text); // produces a nodelist
newText = Array.from(text).find((item)=>item.textContent==='person')
console.log(newText); // Converts the Nodelist to an array


const items = Array.from({length:120},(_,index)=>{
return index
})

const itemPerpage = 14
const pages = Math.ceil(items.length/itemPerpage)

const newItems = Array.from({length: pages}, (_,index)=>{
const start = itemPerpage * index
const temitems = items.slice(start, start + itemPerpage)
return temitems
})
console.log(newItems);
