// Javascript Nuggets - Promises

// For me Promises are just like if statement but are asynchronous

// Promises are mainly used to avoid callback hell
// And it enables us to write sync a code in an async fashion

// A Promise is an object that returns a value we hope to see in the future but 
// not now

// async await
//consume/use promises

//Pending, rejected, Fulfilled
//Promises are mostly used with HTTP request. so if the request workes the resolve
// method data is passed but if it fails the reject method data is passed


const value = 2

const promise = new Promise((resolve,reject)=>{
const random = Math.floor(Math.random()* 3)// Output random numbers b/w 0 to 2
console.log(random);
if (random===value){
resolve('You guessed correctly') // Note that most times the data to be passed if promise is fulfilled
// is passed through the resolve function
}
else {
reject('Wrong number') // data can be sent through the reject if the promse
// fails
}
})

console.log(promise);
//console.log(promise.value)// You can not access resolve and reject like this

//To access the value from the resolve function(i.e if ther is one), we use
// promise.then() then pass in another callback function where the parameter 
// accesses the data from the resolve function
// To access the value from the reject fucntion we use promise.catch.
// To save space we could do promise.then().catch()

promise.then((data)=>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})