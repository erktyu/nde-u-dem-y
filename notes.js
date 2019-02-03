console.log('starting notes.js');

var addNote = (title, body) => {
    console.log(`this is title: ${title} , mean while this is body ${body}`);
};

var getAll = ()=>{
    console.log(`things will be printed here in future for list command`);
};

var getNote = (title)=>{
    console.log(`whatever you put into title registred as a note which has value of ${title}`);
};

var removeNote = (title)=>{
    console.log(`whatever you put into title , now has been removed which had value of ${title}`);
};

module.exports = {
/*
exporting:
    name1: variable1 // that means, export variable1 as name1 to other js files
    instead of writing "var1: var1" you can write just var1 , and they are the same things in lang-ES6  
*/
    addNote: addNote,
    getAll,
    getNote,
    removeNote
}