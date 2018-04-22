const express = require('express');
const app = express();
const data = require('./data');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(__dirname + '/resources'));

app.get('/', function(req, res) {
    res.render('index', {dd: JSON.stringify(data)});
});
app.get('/professional', function(req, res) {
    res.render('prof', {dd: JSON.stringify(data)});
});
app.get('/social', function(req, res) {
    res.render('social', {dd: JSON.stringify(data)});
});

app.get('/download/resume', function(req, res) {
    res.download(__dirname + '/resources/downloads/Resume 2018.docx', 'Resume - Mason Phillips.docx');
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log('Running on ' + port));