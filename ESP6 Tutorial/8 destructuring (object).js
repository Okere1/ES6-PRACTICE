// faster/easier way to access/unpack vaiables from arrays, objects


const bob = {
    first: 'bob',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane',
    },
}

const {last: shake,first, city,siblings:{sister:favourite}} = bob // Note that when distructuring objects the order does not matter but the name of the 
// properties must be exact, but to change the name of the property we use colon then the new
// To distructure and object inside another object, the colon object bracket must be used to specify
console.log(first, shake, city, favourite);
// const firstName = bob.first
// const lastName = bob.last
// const sister = bob.siblings.sister
// console.log(firstName, lastName, sister);


//  CREATING A FUNCTION THAT DISTRUCTURES OBJECTS

function printPerson(person){
const {first, last} = person
console.log(first, last);
console.log(person.last);
}

printPerson(bob)

 // OR We could just distructure the object in the argument point

 function printPerson({first, last,city, siblings:{sister}}){
 
    console.log(first, last, sister);
    }
    
    printPerson(bob)