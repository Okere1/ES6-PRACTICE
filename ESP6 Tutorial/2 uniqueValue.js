const menu = [
    {
        name: 'pancakes',
        category: 'breakfast',
    },
    {
        name: 'burger',
        category: 'lunch',
    },
    {
        name: 'steak',
        category: 'dinner',
    },
    {
        name: 'bacon',
        category: 'breakfast',
    },
    {
        name: 'eggs',
        category: 'breakfast',
    },
    {
        name: 'pasta',
        category: 'dinner',
    },
]

// map - gets all the instances
// new Set - narrow them down to the special unique onces (that is it doesn't repeat any instance)
// [...]  - turns it back to an arrays
// ['all',...] - new array item could also be added
// ... - The spread operator is used to spread the values of an array so most times it can be joined to another array
// it could also be used to create new arrays (joining an object to an array)

const catigories = ['all',...new Set( menu.map((item)=>item.category))]
console.log(catigories);


document.querySelector('#result').innerHTML = catigories.map((names)=>{
   return `<button> ${names}</button>`
}).join('')