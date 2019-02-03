//section 3 - lesson 9

const fs = require('fs');
const os = require('os');

//show the info of the user who is logged in atm.
var user = os.userInfo();
console.log(user);
console.log(user.username); //etc..

//create or edit a txt file called greetings.txt by adding a Helloword inside.
fs.appendFile('greetings.txt',`Hello ${user.username} your shell is ${user.shell}\n` , function(err){
    if(err){
        console.log('Unable to write to file');
    }
})