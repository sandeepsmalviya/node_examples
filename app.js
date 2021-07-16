const express = require('express');
const bodyParser = require('body-parser');

var app = express();

const PORT = 3000;
const SERVER_BINDING='0.0.0.0';

app.set('view engine', 'ejs');
app.use('/', express.static('assets'));

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.listen(PORT, SERVER_BINDING);
console.log('server is listening at port '+ PORT);

//Interceptor
app.use('/', urlencodedParser, function(req, res, next) {
    console.log('Request: method = '+ req.method + ', url = ' +  req.url);
    console.log('Query: ' +  JSON.stringify(req.query));
    console.log("Body:"+JSON.stringify(req.body));
  
    next();
});


app.get('/', function(req, res) {
   // res.sendFile(__dirname+'/public/index.html');
   res.render('index');
});

app.get('/home', function(req, res) {
   // res.sendFile(__dirname+'/public/index.html');
   res.render('index');
});

app.get('/contact',  function(req, res) {
   // res.sendFile(__dirname+'/public/contact.html');
  
   res.render('contact', {qs: req.query});
});

app.post('/contact', urlencodedParser,  function(req, res) {
   // res.sendFile(__dirname+'/public/contact.html');  
   //res.send('welcome, ' + req.body.who + ', '+ req.body.department);
   res.render('contact-success', {data:req.body});
   //res.send('welcome, ' + req.body.department);
});


app.get('/profile/:name', function(req, res) {
   //res.send('you requested to see the profile with the id of '+ req.params.name);
   var data = {
       age:37,
       dept:'IT',
       hobbies : ['eating', 'fighting', 'singing']
   }
   res.render('profile',  {person: req.params.name, data:data});
});




