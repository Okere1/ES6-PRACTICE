// Spread Operator ...
// Allows and iterable to spread/expand individually inside receiver
// Split into single items and copy them


const udemy =  'udemy'
const letters = [...udemy]
console.log(letters);// the spread operator is used to spread iterables one by one


const boys =  ['john', 'peter', 'bob']
const girls = ['susan', 'anna']

const bestFriend = 'arnold'

const friends = [boys, girls, bestFriend]
// console.log(friends); 
// The result will show two different arrays and one string all inside a new array
// To join all arrays to get one array we use the spread operator
const friends = [...boys, ...girls, bestFriend]
//console.log(friends);

// Reference

const newFriends = friends
newFriends[0] = 'nance'
console.log(newFriends);
console.log(friends); // you'll notice that changes made on the newFriends array will affect the friend array
// which is not what we want. We want to copy the array and work on the duplicate
// To do this we use the spread operator to copy

//Copy

const newFriends = [...friends] // With this done, any changes made on the newFriends array will no affect the friends array
newFriends[0] = 'nance'
console.log(newFriends);
console.log(friends);

// The same thing can be done with objects
