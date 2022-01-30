const people = [
    {
        name: 'bob',
        age: 20,
        position: 'developer',
    },
    {
        name: 'anna',
        age: 25,
        position: 'designer',
    },
    {
        name: 'susy',
        age: 30,
        position: 'the boss',
    },
    {
        name: 'Promise',
        age: 29,
        position: 'Full Stack Guy',
    },
];
// The Map method is one of the most used array method, used to iterate (not just display all array value) through an array and returns back an array
// The method does not change the original size of the array (unlike filter)
//The map method works with callback function where the parameter contains or gives access to all the arrays content
// or properties, the method also return whatever you want to return. Here the Parameter which gives access to the arrays
// content can be manipulated and returned to maybe your html code
 
const getAges = (person)=>person.age *2  // One line function needs no curly braces
const ages = people.map(getAges)
console.log(ages);

const newPeople = people.map((item)=>{ // item contains all properties of the people array
return {                               // Used to manipulat the item value and return the result to be used
    firstName: item.name.toUpperCase(),
    oldAge: item.age + 20,
}
})
// Below we accessed or iterated through the array to get the names and then returned them to the html div with id 'result'
// the join() method was used to remove those comma seperators to just empty space string seperators

const names = people.map((person)=>`<h2>${person.name}</h2>`)
document.querySelector('#result').innerHTML = names.join('')