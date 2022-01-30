// Optional chaining is used when the array you're working with has properties with 
// different unsimilar value or even different properties
// If the normal array method is used to iterates to find a particular property,
// It won't find them in some of the properties which will bring up error   


const people = [
    {
        name: 'bob', 
        location: {street: '123 main street'} , 
        timezone: {offset: '+7:00'},
    },
    {
        name:'peter',
        lcoation: {street: '123 Pine Street'},
    },
    {
        name:'susan',
        location: {street: '123 Apple street',
        timezone: {offset: '+9:00'}},
    }
]


people.forEach((person)=>{
    console.log(person.name);
    console.log(person.location.timezone.offset);// This will display an error 
    // Because the forEach method iterates through all the arrays and one of the 
    // objects do not have the timezone.offset property
    // Note that this can also be done using the && operator
    // The AND (&&) operator checks if the first statement is true and if yes it goes
    // to the next, If any is false (not found) it returns underfined but will
    // still continue with other statements example
    
    console.log(person.location &&
         person.location.timezone &&
         person.location.timezone.offset || 'Hellow World' );

    // Using optional chaining (?.) this can be done with less code
    //example

    console.log(person?.location?.timezone?.offset);
    // If you do not want the system to display underfined whenever it comes
    // accross those objects without the property been searched for, you can
    // use the or OR (||) and then write what you want displayed inplace of undefined 
    // Example

    console.log(person?.lcoation?.timezone?.offset || 'hello world');
})