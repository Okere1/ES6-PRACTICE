// Reduce
//iterates, callback function
//reduces to a single value - number, array, object
// 1st parameter ('acc') - total of all calculations starting with the initialized number,array or object after the callback function
// 2nd parameter ('curr') - current iteration/value - Gives you access to the properties and values in the object 

const staff = [
    {name: 'bob', age: 20, position: 'developer', salary: 100},
    {name: 'peter', age: 25, position: 'designer', salary: 300},
    {name: 'susy', age: 30, position: 'the boss', salary: 400},
    {name: 'anna', age: 35, position: 'intern', salary: 10},
];

// Code to add the total salaries for the day
const dailyTotal = staff.reduce((total,person)=>{ // the 'total' parameter is there to save or add the iterated numbers starting from its initial '0'
console.log(total);
console.log(person.salary);
total += person.salary // the person parameter it there to give access and iterate the property and value of the object
return total  //  NOTE Don't forget to always return 'total or acc' if not the code won't work
},0) // The 0 means we want to return a number and it should be empty at first, we could also make it start from a higher number lik 20 100 etc

console.log(dailyTotal);