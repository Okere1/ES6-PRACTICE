fetch('https://reqres.in/api/users') // Fetch always returns a promise
.then(res=> res.json())      // the response data to be seen can't be read on the response object, it has to be converted
.then(data => console.log(data))  // to a json object to be seen. Also note that the .json() also returns another promise
                                 // which is why we can use .then again

// // if we try to access a wrong user from our API the error doesn't show in the catch.
// // This is because fetch is always successful, but the error shows up in the console.
// // To handle this error, an if statement can be used to check if the res is true or false example


fetch('https://reqres.in/api/users')
.then(res=>
    { 
        if(res.ok){
            console.log('SUCCESS');
    }
    else{
        console.log('Not Successful');
    }
        res.json()
})
.then(data => console.log(data))

// //The fetch method has two parameters, the first is the API url and the second which is optional (the second parameter
// // is used to work on the server, either post, update, delete data etc from the server) Example

fetch('https://reqres.in/api/users', {
    method: 'POST',  // The POST means we want to add data to the server
    headers: {  // For this to work you need to tell fetch that you're passing a json data, this is done with the header
        'Conteny-Type': 'application/json'
    },
    body: JSON.stringify({  // Data to be passed to the server, In fetch the body data also have to be sent as json and stringigy the object that you're passing
        name: 'User 1'
    })
}).then(res=>
    { 
        if(res.ok){
            console.log('Hellow Promise');
    }
    else{
        console.log('Not Successful');
    }
        res.json()
})
.then(data => console.log(data))