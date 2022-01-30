// Javascript Nuggets
// Fetch Errors
// Not that Fetch Only throws an error if cannot resolve and it always resolves even if there is an error with the url
// Fetch alway resolves trditional errors but if it was a network error then it will reject it
// The Error Response (400-500) will be from the json when trying to convert a bad file (or nothng) to json format 
// To solve this we can set up an if statement after fetching the data

const url = 'https://www.course-api.com/react-tours-project'

const getTours = async () =>{
    try {
        const resp = await fetch(url)
        if(!resp.ok){
            const msg = `There was an error "${resp.status}" ${resp.statusText}` // If there's an error the fetch doesn't 
            // just end the response it responds with a wrong data, like the status will be 404, statusText: 'not found'
            //So we are just using the properties in the data gotten from the fetch to display an error, we could also 
            // just write anything we want too

            throw new Error(msg)  // throw the error
        }
    } catch (error) {
        console.log(error);
    }
}

const btn = document.querySelector('.btn')
btn.addEventListener('click', getTours)
