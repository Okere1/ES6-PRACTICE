// faster/easier to access/unpack variables from arrays, objects

const fruits = ['orange', 'banana', 'lemon']
const friends = ['john', 'peter', 'bob', 'anna', 'kelly']

const fruit1 = fruits[0]
const fruit2 = fruits[1]
const fruit3 = fruits[2]

console.log(fruit1, fruit2, fruit3);

const [a,b,c,d,e] = friends // Note that when distructuring an array, the variables (a-e) representing the values of th
// array to be distructured should be arranged in the same order in the array. 1st variable represents first value
// (a-john, b-peter, c-bob, d-anna, e-kelly)
console.log(a,b,c,d,e);

const [a,,c,d,e] = friends // to skip a value when distructuring, just leave the space empty with the usual comma
console.log(a,c,d,e);

// SWAPING VARIABLES

let first = 'bob'
let second = 'john'
console.log(first, second);

let temp = second
second = first

first = temp
console.log(first, second);

// SWAPING VARIABLES USING ARRAY DISTRUCTURING

[second, first] = [first, second]
console.log(first, second);