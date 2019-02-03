console.log('starting notes.js');


//(Ref.nr. 1A[see app.js])this is how you export variables to other js files
module.exports.age= 25;
module.exports.addNote = () => {
    console.log('addNote');
    return 'New Note';
    
};

//(Ref.nr. 2A[see app.js])this is how you export variables to other js files
module.exports.add= function(a, b) {
    console.log('add fonksiyonundan gecti');
    return (a+b);
};


//to see what is going on in the module you can use module variable to call all info
console.log(module);