var fs = require('fs');

readFilePath = __dirname + '/index.html';


//var indexHtmlData = fs.readFileSync(readFilePath, 'utf8');
//fs.writeFileSync(__dirname+ '/app.html', indexHtmlData);

fs.readFile(readFilePath, 'utf8', function (error, data) {
    if (error) {
        console.log(error);
    } else {
        console.log(data);
        fs.writeFile(__dirname + '/app.html', data, (error) => {
            if (error) {
                console.log(error)
            } else {
                console.log('file writen successfully');
                fs.unlink(__dirname + '/app.html', (error)=> {
                    if (error) {
                        console.log(error)
                    } else {
                        console.log('file removed successfully');
                    }
                });
                
            }
        });
    }
});

console.log(readFilePath);


