/**Section 3 - lesson 11
 * 
 * npm initializing / creating package.json
 * and 
 * downloading lodash package "_"
 * 
 * TIPS: YOU CAN REMOVE WHOLE node_modules map and install all them back by 'npm install'
 * in terminal. npm will find all packages with right versions through package.json file
 * 
 *----------------------------------------------------*/

console.log('starting apps.js');

const _ = require('lodash');

console.log(_.isString(true));
//shows false , because true is boolean not string

console.log(_.isString(5));
//shows false , because 5 is not string

console.log(_.isString("5"));
//shows true , because 5 is string

console.log(_.uniq([1,1,1,1,1,2,3,3,3,"abc",'abc','abc','c','c']));
//shows [ 1, 2, 3, 'abc', 'c' ]
