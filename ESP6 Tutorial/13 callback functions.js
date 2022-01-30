// Callback functions are functions that are passed in as aruguments and executed later
// Generally you can pass and use a function inside another function by just passing 
// it as an arguement (like just its name) then declare the function inside 
// the other function inputing the argument you want processed

function makeUppercase(value){
   console.log(value.toUpperCase());
}

function reverseString(value){
console.log(value.split('').reverse().join('')) // split method is use to create an array out of a
// string. The first argument states the seperator and the other states the
// number of string to be take
// reverse is used to reverse array items
// join method creates and returns a string by joining or concatenating all the
// elements in an array
}

makeUppercase('peter')

function handleName(name, cb){
    const fullName = `${name} smith` //Note that the template string `` is used 
    // when we want to mix strings and a variable 

    cb(fullName)
}

handleName('peter', makeUppercase) 
handleName('peter', reverseString) // Also note that you don't always have to 
// use a function refrence here, you can set up the function here while passing
// it to the other function as long as we are not calling the function there 
// Example

handleName('susan', (value)=>{  // we can also use arrow functions 
    console.log(value);
})

// EVENT LISTENERS

document.querySelector('.btn').addEventListener('click', function(){
    console.log('Hello world');
})