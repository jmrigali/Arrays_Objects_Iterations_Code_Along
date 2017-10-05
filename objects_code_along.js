//Objects!
// References: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object"
// Defintion: a "container" for similar data
// SYNTAX:
// var object = {
//   key: value,
//   key1: value1,
//   key2: value2
// };

// **KEY-VALUE PAIRS**
// An object has no defined length or order.
// We can some sense out of this by using Key-Value Pairs.

// key = identifier (like an index of an array);
// value = data you wish to refer to (it can be anything at all);

// ***Accessing KEY-VALUE PAIRS:***
// var person = {
//   developer : true,
//   age: 55,
//   checkAge : function () {
//     return this.age;
//   },
//   siblings : ['Sally', 'George', 'Fred', 'Selena'],
//   child : {
//     name: 'Jessica',
//     age: 25,
//     height: 5.4,
//     friends: [{
//       name : 'Mark',
//       age: 27,
//       height: 5.8
//     }, {
//       name : 'Demian',
//       age : 35,
//       height: 5.11,
//       friends : [{
//         name: 'Sara',
//         age: 32,
//         height: 5.9
//       }]}]
//   }
// }

var person = {
  developer : true,
  age: 55
}

// **SQUARE BRACKET NOTATION:**
// can be used for variables
// SYNTAX:
// object[key];

// **DOT NOTATION:**
// can NOT be used for variables (ie. for-in loop)
// SYNTAX:
//object.key

// Examples:
//Before Running this, make a guess what this will output

// UNCOMMENT BELOW!!
// console.log("ENTER GUESS HERE", person["developer"]);
// console.log(person.age);

// UNCOMMENT BELOW!!
// console.log("ENTER GUESS HERE", person[developer]);

// (****DELETE BELOW:
// console.log("ENTER GUESS HERE", person.checkAge());
// console.log("ENTER GUESS HERE", person.siblings);****)

// **UPDATING Key-Value Pairs:**

// Syntax:
// UNCOMMENT BELOW!!
// person.developer = false;
// person['age'] = 56;

// console.log(person);

// what about adding a name to person?
// UNCOMMENT BELOW
// person.name = "Jack";
// console.log(person);
// or
// UNCOMMENT BELOW
// person[height] = 5.10;
// console.log(person);

//***QUESTIONS??***

// Deleting Key-Value Pairs:

// Syntax:
// delete object[key];
// delete object.key;

// Add a pet with name to person object.
// Update your person object to add your information
// delete the pet key-value pair to your person object


//***Now let's make this more complicated!****
//add a friend object to your person object
//In that object, add a name, age, height


//How do you access the friend's name?

//now add friend object to your friend//

//how do you access that friend's age?

// **Iterating over Objects:**

// FOR-IN LOOP:
// STRUCTURE:
// for(var KEY in OBJECT){
//   do something here;
// };


// Notice!! There is no length or order to an object
// How do you access these keys or values?

// hasOwnProperty([key]) - takes in a string and returns a boolean for if it is in the object in question.
// Object.keys([object]) - takes in object you are looking up and return the keys of that object
// ^^^Notice the Uppercase "O": That is because Object is in fact an Object and all objects in JavaScript inherit some Object properties!! Super Neat!


// Example:
// UNCOMMENT BELOW!!
// var musicOfThe90s = {
//   hip_hop: ['NWA', 'Snoop Dogg','Tupac', 'Notorious B.I.G', 'Wu-Tang Clan', 'Run-D.M.C', 'A Tribe Called Quest', 'De La Soul', 'Public Enemy'],
//   pop: ['Backstreet Boys', 'NSYNC', 'Spice Girls', 'New Kids on the Block', 'Destiny\'s Child', 'Hanson', 'TLC', 'Boys II Men', 'No Doubt', 'En Vogue'],
//   rock:['Nirvana', 'Pearl Jam', 'Radiohead', 'Soundgarden', 'Alice in Chains', 'Guns N\' Roses', 'Green Day', 'The Smashing Pumpkins', 'Rage Against the Machine', 'Metallica', 'Red Hot Chili Peppers', 'Foo Fighters', 'Nine Inch Nails']
// };

//Before Running this, make a guess what this will output
// UNCOMMENT BELOW!!
// console.log("ENTER GUESS HERE", musicOfThe90s.hasOwnProperty('Tupac'));
// console.log("ENTER GUESS HERE", musicOfThe90s.hasOwnProperty('hip-hop'));
// console.log("ENTER GUESS HERE", Object.keys(musicOfThe90s));
