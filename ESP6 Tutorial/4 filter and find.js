// Filter - returns a new array, can manipulate the size of new array (unlike map), returns items based on a condition
// The filter iterate through the array and checks for a particular condition and returns items that fit with it
// Find - returns single instance of the whole array be it a full object or single string, returns first match, if no match - undefined
// With find you'll always get the first instance of code that fits the condition you use but for filter, it gets 
//all variable that fits with your condition and forms them to an array
const people = [
    {name: 'bob', age: 20, position: 'developer'},
    {name: 'peter', age: 25, position: 'designer'},
    {name: 'susy', age: 30, position: 'the boss'},
    {name: 'anna', age: 35, position: 'intern'},
]

const fruits = ['orange', 'pear','lemon'];

const youngPeople = people.filter((person)=>{
    // if(person.age < 30)
    // {
    //     return person
    // }  OR
    return person.age < 30
})
console.log(youngPeople); // Returns every object with property 'age' less than 30


const developer = people.filter((person)=>person.position==='developer')
console.log(developer); // It returns the full object with 'developer' as the position

const seniorDevs = people.filter((item)=>{
    item.position==='senior dev'
})
console.log(seniorDevs); //  it returns an empty array as their is no seniorDevs on the people array


const peter = people.find((person)=>person.name==='peter')
console.log(peter); // it outputs the full object instance with name as 'peter'

const fruit = fruits.find((fruit)=>fruit==='lemon')
console.log(fruit); // the result is 'lemon'

const oldPerson = people.find((person)=>person.age > 35)
console.log(oldPerson); // result is undefined bcos no instance matach the condition

const randomAge = people.find((person)=>person.age < 35)
console.log(randomAge); // It shows the first instance it finds that matches the condition

// NOTE that for find method, each value of the property is outputs can be access with .the name example
console.log(peter.position);

// NOTE that for filter it always output an array so to acces values of the objects properties you must have to state the 
// index no. In a case where it's just one object then the index is 0
const anna = people.filter((person)=>person.name==='anna')
console.log(anna[0].position);
