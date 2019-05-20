const express = require('express');
const app = express();
const port = 8080;
const path = require('path');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, function(){
    console.log("Hello world on port: "+port);
});

app.get('/', function(req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World!');
})

app.get('/demo/:user', function(req, res){
    res.send('Params: '+req.params+'--- Query: '+req.query.name);
})

app.get('/users/:userId/books/:bookId', function (req, res) {
    res.send(req.params);
})

app.get('/welcome', function(req, res){
    res.send('Hello : '+req.query.name);
})

app.get('/form/register', function(req, res){
    res.send('Hello : '+req.query.name);
})
app.post('/form/register', function(req, res){
    res.send('Form sent: Username '+req.body.username+' ----Password '+req.body.password);
})

app.get('/home', function(req, res){
    res.sendFile(path.join(__dirname)+'/home.html', function(err){
        console.log(err);
    });
})