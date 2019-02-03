/**Section 3 - lesson 13
 * 
 * this lecture shows how to communicate with your node.js app via terminal.
 * (OBS NOTHING TO DO WITH EXTERNAL MODULES IN THIS LECTURE!!)
 * but next lecture will have a module to make this communication way more easier
 * 
 *----------------------------------------------------*/

console.log('starting apps.js');

const fs = require('fs');
const _ = require('lodash');

const notes = require('./notes');

/*
this prints every arguments that are passed into app.js through terminal
for example if you write (IN TERMINAL):
node app.js randomNamexxxx --titlesdsd="blabla"
and this 'console.log(process.argv);' in app.js will print things below

[ '/usr/bin/node',
  '/home/tasa/Documents/js/udemyNode/app.js',
  'randomNamexxxx',
  '--titlesdsd=blabla' ]

*/

console.log(process.argv);

var command = process.argv[2];
console.log('Command: ', command);

if (command === 'add')
    console.log('Adding new note');   
else if(command === 'list')
    console.log('Listing all notes');
else if(command === 'read')
    console.log('Fetching notes');
else if(command === 'remove')
    console.log('Removing notes');
else
    console.log('Not recognized');
    
    