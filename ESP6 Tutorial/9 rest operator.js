// // Rest Operator...
// // gathers/collects items
// //destructuring (To get the rest items in arrays or objects), functions (But in functions they are used for declaration)
// //while spread operator is used when invoking the function
// //placement important, careful with the same name
// //rest when declare function, spread when invoke the function


// // arrays

// const fruits = ['apple', 'orange', 'lemon', 'banana']
// const [first,...rest] = fruits // The ...rest colects the rest of the item in the fruit array except the first one 'apple'
// console.log(first,rest);
// console.log(rest);
// const newfruit = rest.find((fruit)=> fruit==='lemon')
// console.log(newfruit);


// objects. Same thing can be done with objects, and note that the rest operator has to always be used after the
// main items (arrays) or properties is distructured first

const person = { name: 'john', lastname: 'smith', job: 'developer'}
const {name,...rest} = person
console.log(name, rest);


// functions

const getAverage = (name, ...scores) =>{ // The ...rest (in this case 'scores') is used to hold remaining items in an array
    // So in this case were there is no array it holds all the items in the array i.e an empty array
    console.log(name);
    console.log(scores);
const average = scores.reduce((total,item)=>{
return total += item
},0)/scores.length
console.log(average);
}

//getAverage(person.name,78,56,78,78,90,76)

const testScores = [23,45,56,67,34,45]
//getAverage(person.name, testScores) // Won't work becos of the nested array
getAverage(person.name, ...testScores) // Will work becos the spread operator has been used to join both arrays