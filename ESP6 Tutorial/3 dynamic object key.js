// dot notation

const person = {
    name: 'john',
}
console.log(person.name); // Displays john
person.age = 25; // New properties or keys can be created on an object and given a value
console.log(person); // Now displays the person object now having name and age property

// square bracket notation

const items = {
    'featured-items': ['item1', 'item2'], // A property with the hyphen symbol must be quoted to be used
}

console.log(items['featured-items']); // To display such property or any other property, a square bracket can by used
console.log(person['name']);



let appState = 'loading';
let keyName = 'computer'
const app = {
    [appState]:true
}

console.log(app); // This shows 'loading' as the key with the value 'true'
// For key or property with square bracket, the key can be changed by assigning a value to it outside the object
// For properties with the square notation, a value should always be assigned to the property outside the object

app[keyName] = 'apple'
app[appState] = false
console.log(app); // The Key 'loading' is changed to false and the new key created has a name of computer and value of 'apple'


// EXAMPLE

const state = {
    loading: true,
    name:'',
    job:'',
}

function updateState(key,value){ // The function takes in two parameters and uses it to update the property of the state object using the square bracket notation 
    state[key] = value
}

updateState('name','house') // updates the name property with the value 'house'
updateState('job','developer') // updates the job property with the value 'developer'
updateState('loading','false')// updates the loading property with the value 'false'
updateState('products',[])
console.log(state);


const state = {
    save: true,
    name:'',
    job:''
}
console.log(state['save']);// This displays the value of the save property
state['oldAge'] = 29 // This adds a new property and value to the object

function updateState(key,value){ // A function used to automate adding properties and values in an object
    state[key] = value
}

updateState('age',24)

console.log(state);