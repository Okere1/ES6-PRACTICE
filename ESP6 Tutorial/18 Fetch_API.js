// Javascript Nuggets

// Fetch API - Browser API for HTTP (AJAX) Requests
// Default - GET Requests, supports other methods as well
// Returns Promise

 const url = 'https://www.course-api.com/react-tours-project'

 //console.log(fetch(url)) // Returns a Promise

fetch(url).then((resp)=> resp.json)
.then((data)=> console.log(data))
.catch((err)=> console.log(err))

// USING ASYNC AWAIT

const getTour = async ()=>{
try {
    const resp = await fetch(url)
    const data = await resp.json()
    console.log(data)
} catch (error) {
   console.log(error) 
}
}
getTour()

// Note that in cases where you would want to use the data outside the function, you can just return the resp.json
// then use .then to get the data. Example

const getTour = async ()=>{
    try {
        const resp = await fetch(url)
        return resp.json()  // Sending the data out to be used outside the function
        
    } catch (error) {
       console.log(error) 
    }
    }

    getTour().then((data)=> console.log(data)) // Using the data outside the async function by using .then because async functions always returns a Promise
