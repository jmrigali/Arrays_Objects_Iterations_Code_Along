//Arrays

// Definition: a set of elements in a "particular" order;
// syntax: var array_literal = [];

// creating an array:
// var array = [1, "Sally", true, ['cheese', 'dough', 'pepperoni']];

// Accessing Elements in an Array:
// Use it's "INDEX"
// index = a location in an array where an element lives;

//examples:

var pizzaToppings = ['Mozzarella', 'Pepperoni', 'Peppers', 'Basil', 'Sun-Dried Tomatoes'];

//Before Running this, make a guess what this will output
// UNCOMMENT BELOW:
//
// console.log("ENTER GUESS HERE", pizzaToppings[2]);
// console.log("ENTER GUESS HERE", pizzaToppings[5]);
// console.log("ENTER GUESS HERE", pizzaToppings[6]);


// Iterating over Arrays

// so many ways!

// LENGTH METHOD
// array.length gives the number of elements in an array
// this is very **important** when wanting to iterate over an array

// Think about this?

// var numbers = [0,1,2,3,4,5];

// console.log("TRUE OR FALSE", numbers.length === numbers.indexOf(5))

// FOR LOOP:
// structure= for ([Initial Expression]; [Condition]; [Increment Expression]) {
//Do Something Here};

// example:
// UNCOMMENT BELOW:

// var array = ['Sally', 'sells', 'seashells', 'by', 'the', 'seashore'];
// UNCOMMENT BELOW:

// for(let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }
// UNCOMMENT BELOW:

// for(let i = 0; i < 3; i++){
//   console.log(array[i]);
// }

// FOR OF LOOP:
// structure: for (var element of array){
//   Do Something here};

// example:

// for(let word of array){
//   console.log(word);
// };

// Manipulating arrays:
// There are so many native methods!
// Please check out MDN docs for array methods:
// "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array"

// You can add items to an array:
// push - adds to end of array;
// unshift - adds to the beginning of array;
// concat - joins two or more arrays;

// You can remove items from an array:
// pop- removes last element of an array;
// shift- removes first item of an array;
// splice - removes a section of an array;

// Test it out:
// UNCOMMENT BELOW:
// var perfectBurger = [];
// var burgerToppings = ['lettuce', 'tomato', 'cheese', 'bacon', 'mayo', 'bbq', 'buffalo sauce', 'mushroom', 'onions', 'pulled pork', 'pineapple', 'peanut butter', 'jalapeno jelly'];
// var burgerTypes = ['hamburger', 'chicken', 'veggie patty', 'tofu', 'bison patty'];

// make your own perfect Burger by manipulating the toppings and type array and adding them to the perfect burger!
