// Javascript Nuggets
//ECMAScript 2022
// at() - takes integer and returns the item at that index - string, array
// It can be used for both strings and arrays. It can iterate through the string or array and give you any of the items 
// you want

// Top Level Await (Another special feature that us to not to use functions in setting up async await
// Because we'll use it directly in the module) - Basic Example
const scores = [99, 100, 122]

// Now to get the last item in this array we can do the following old method
// For this feature to work you need to run your code with a server (Preview on a we Server, Live Server) (Not just opening the code file from a folder)
// You also need to set it up as a module when linking your html with the js file (type="module")
const oldMethod = scores[scores.length - 1] // Old method of getting last index item in an array
console.log(oldMethod);

const newMethod = scores.at(-1) // Shows the last index item in the array
console.log(newMethod);

const name = 'Promise'
console.log(name.at(0)); // Shows the first index item in the string


// Top Level Await - Basic Example

//Fetching from a server or API using PROMISES
fetch('https://www.course-api.com/react-tabs-project')
.then((resp)=>resp.json)
.then((data)=>console.log(data))

//Fetching from a server or API using Asyn Await
const getData = async ()=>{
    const resp = await fetch('https://www.course-api.com/react-tabs-project')
    const data = await resp.json()
    console.log(data);
}
getData()

//Fetching from a server or API using Top Level Await (new feature)
// We just do it without creating any function and directly use await in the module were the code is to be used
const resp = await fetch('https://www.course-api.com/react-tabs-project')
    const data = await resp.json()
    console.log(data);