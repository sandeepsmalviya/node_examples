var fs = require('fs');
fs.mkdirSync('stuff');
fs.rmdirSync('stuff');

fs.mkdir('anotherStuff', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('directory created ');
       
    }
})

fs.rmdir('anotherStuff', (error) => {
    if (error) {
        console.log(error);
    } else {
        console.log('directory removed ');
    }
})
  

