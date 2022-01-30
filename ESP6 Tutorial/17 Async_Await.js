// Javascript Nuggets
//async/await
// async must be present (usually before the function) before you can use 'await'. And it always returns a promise
// await waits till promise is settled
// error handling - try/catch block

const example = async ()=>{
    return 'hello there'
}

console.log(example()); // It returns a Promise

async function someFunc(){
    await example()
    console.log('hello world');
}
someFunc()

//ANOTHER EXAMPLE USING PROMISES The code checks if the clients name is in the user arrays if yes gets its id
// and uses the id to identify its article in the articles array

const users = [
    {id: 1, name: 'john'},
    {id: 2, name: 'susan'},
    {id: 3, name: 'anna'},
]

const articles = [
    {userId: 1, articles: ['one', 'two', 'three']},
    {userId: 2, articles: ['four', 'five'] },
    {userId: 3, articles: ['six', 'seven', 'eight', 'nine']},
]

function getUser(name){
    return new Promise((resolve, reject)=>{
        const user = users.find((user)=>user.name===name)
        
        if(user){
            resolve(user)
        }
        else{
            reject(`No such user with name : ${name}`)
        }
    })
}


function getArticles(userId){
    return new Promise((resolve, reject)=>{
        const userArticles = articles.find((user)=>user.userId===userId)

        if(userArticles){
            resolve(userArticles.articles)
        }
        else{
            reject(`Wrong ID`)
        }
    })
}

getUser('susan').then((user)=>getArticles(user.id))
.then((articles)=>console.log(articles))
.catch((err)=>console.log(err))


//DOING SAME FUNCTION USING ASYNC AWAIT. The essence of using ASYNC AWAIT is to avoid using the .then (i.e chainng the .then)
// The code uses AWAIT to make sure the function that checks if the clients name is in the user arrays runs first
// Befor the other function

const getData = async ()=>{
const user = await getUser('john')
console.log(user);
if(user){
   const articles = await getArticles(user.id)
    console.log(articles);
}
}

getData()

// NOW TO HANDLE THE ERRORS IF THE USER OR ID IS WRONG. We could use a try Catch error block, where we put our funtionality
// In the try block and if it fails we use the catch to output error message Example

const getData = async ()=>{
try {
    const user = await getUser('john')
    if(user){
    const articles = await getArticles(user.id)
    console.log(articles);
}
} catch (error) {
    console.log(error);
}
}
getData()

// Note also that could also decide not to check if the user name is correct, bcos if it is wrong we already have
// the catch block to output an error message, so could just erase that, example

const getData = async ()=>{
try {
    const user = await getUser('john') // Wait until getUser function finish running, if it works move to next line, if user name is wrong, Catch an error
    const articles = await getArticles(user.id)
    console.log(articles);

} catch (error) {
    console.log(error);
}
}
getData()
