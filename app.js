/**Section 3 - lesson 10
 * 
 * Implementing local js files into require function
 * 
 *----------------------------------------------------*/

console.log('starting apps.js');

//show the info of the user who is logged in atm
const notes = require('./notes');

//(ref.nr. 1A [see notes.js])use the variable that is exported 
console.log(notes.age);
const res = notes.addNote();
console.log(res);

//(ref.nr. 2A [see notes.js])use the variable that is exported 
console.log(notes.add(5,10));
