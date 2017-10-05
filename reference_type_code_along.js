// Reference Types!
//
// Arrays, Objects, and Functions are reference types.
// Reference types refer to a spot in memory where the value is stored.
// That "spot" a reference type refers to is called a POINTER.
// When declaring a variable that is a reference type, you are actually assigning it to a POINTER (a location in memory).
// How this differs from a Primitive Type is pretty confusing, but you will get it.

//examples:
// UNCOMMENT BELOW:

// var string = "Hey Class, How are you doing?";
// var string2 = string;
// string = "Yay! Learning all these subjects are so much fun!";

//Before Running this, make a guess what this will output
// UNCOMMENT BELOW:

// console.log("Yay", string);
// console.log("Hey Class", string2);

// UNCOMMENT BELOW:
//
// var array = ['sally', 'sells', 'seashells', 'by', 'the', 'seashore'];
// var array2 = array;
// var array3 = [1,2,3];
// array.push(array3);
// //
// //Before running this, make a guess what this will output
// // UNCOMMENT BELOW:
//
// console.log("1,2,3", array);
// console.log("ENTER GUESS HERE", array2);

// UNCOMMENT BELOW:
//
// var arr = ['sally', 'sells', 'seashells', 'by', 'the', 'seashore'];
// var arr2 = arr;
// var arr3 = ['sally', 'sells', 'seashells', 'by', 'the', 'seashore'];

//Before running this, make a guess as to the if the comparison is true or false
// UNCOMMENT BELOW:

// console.log(arr === arr2);
// console.log(arr == arr3);

//Turn and talk to a neighbor as to why this may be
//
// let arr = [1,2,3];
// let arr2 = arr;
// let arr3 = "1,2,3";
// arr2.push(arr3);
// 
// console.log(arr);
