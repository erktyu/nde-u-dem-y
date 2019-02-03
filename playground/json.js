/**Section 3 - lesson 15
 * 
 * converting js objects to json objects and save them in json language
 * 
 * 
 */

const fs = require('fs');
 

//---------------- JS object to JSON ----------------//

var obj = {
    name: 'bla'
};

var stringObj = JSON.stringify(obj);
console.log(typeof stringObj);
console.log(stringObj);

//----------------------- END -----------------------//


//---------------- JSON object to JS ----------------//

var personString = '{"name": "bla","age": 25}';//This is string version of json key, value pairs
var person = JSON.parse(personString);
console.log(typeof person);
console.log(person);

//----------------------- END -----------------------//



//---------------- JS to file as JSON ---------------//

var originalNote = {
    title: 'Some title',
    body: 'Some body'
};

var originalNoteString = JSON.stringify(originalNote);

fs.appendFileSync('notes.json', originalNoteString);

//----------------------- END -----------------------//



//---------- JSON from file to console.log ----------//

var dataFromFile = fs.readFileSync('notes.json');
dataFromFile = JSON.parse(dataFromFile);

console.log('gecti3',dataFromFile.title);
console.log('gecti4',dataFromFile.body);

//----------------------- END -----------------------//