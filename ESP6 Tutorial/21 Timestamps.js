// Javascript Nuggets
// Timestamps

console.log(new Date()); // Used to get the current date and time

// Unix Time
// january 1, 1970
// 1s = 1000ms

// Date.now()
console.log(Date.now());

// new Date().getTime()
console.log(new Date().getTime());

//new Date().valueOf()
console.log(new Date().valueOf());

setTimeout(() => {
    console.log(Date.now());
}, 1000);


// Create id's in learning apps
// We can use date (i.e the Date.now()) method to create unique id for clients if they register at different times
// The setTimeout() method is used in this example to illustrate that each client register at different times

let people = []
people =[{id: Date.now(), name: 'peter'}]

console.log(people);


setTimeout(() => {
    people = [...people, {id: Date.now(), name: 'john'}]
    console.log(people);
}, 1000);


// Create/ get dates. And use it to set up an expiring plan for a client
console.log(new Date(1643692697674));
const now = Date.now()
const futureDate = new Date(now + 1000 * 60) 
console.log(futureDate); // This date will be higher than Date.now() by 1min because we added 60000sec which is 1m(1sec = 1000ms)

// Differnce between dates

const firstDate = new Date()
const secondDate = new Date(2022, 1, 28)

console.log(firstDate);
console.log(secondDate);

const timeDiffernce = secondDate - firstDate
console.log(timeDiffernce);
const minutes = timeDiffernce/ (1000 * 60)
console.log(minutes);// Convert result to minutes

const hours = timeDiffernce/(1000 * 60* 60)
console.log(hours);// Convert hour
