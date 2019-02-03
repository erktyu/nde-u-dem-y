/**Section 3 - lesson ??
 * 
 * this lecture shows how to communicate with your node.js app via terminal.
 * (OBS NOTHING TO DO WITH EXTERNAL MODULES IN THIS LECTURE!!)
 * but next lecture will have a module to make this communication way more easier
 * 
 *----------------------------------------------------*/

console.log('starting apps.js');

const fs = require('fs');
const _ = require('lodash');
const yargs= require('yargs');

const notes = require('./notes');

//console.log(process.argv);
//console.log(yargs.argv);

/*
commands without hyphens is collected under an array that has a key of _ as you can see on the first character on terminal result
{ _: [ 'remove' ], title: 'blabla', '$0': 'app.js' }

the result above contains to this command on terminal'node app.js remove --title="blabla" '

which makes in this case "process.argv[2]" equals to "yargs.argv._"
*/

var argv = yargs.argv;
var command = argv._[0]; //left code replaces the right side 'var command =process.argv[2];'
console.log('Command: ', command);
console.log();

/*
write this to terminal
node app.js add --title="blabla" --body=deneme --ucuncu ucuncuBudur

write this to code in e.g app.js
console.log(`this is argv title ${argv.title} . and this is body ${argv.body} and the last one is ucuncu ${argv.ucuncu}`);

result in terminal is going to be this
this is argv title blabla . and this is body deneme and the last one is ucuncu ucuncuBudur

conclusion:
with the YARGS module, arguments in terminal with double hyphens can be writen in double quotes, single quotes, 
without quotes(then you cant use space), or no quotes nor equality sign.
for instance
    --body="deneme"  --body='deneme'  --body=deneme   --body deneme 
*/

if (command === 'add')
    notes.addNote(argv.title, argv.body);
else if(command === 'list')
    notes.getAll();
else if(command === 'read')
    notes.getNote(argv.title);
else if(command === 'remove')
    notes.removeNote(argv.title);
else
    console.log('Not recognized');
