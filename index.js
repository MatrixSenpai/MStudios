const express = require('express');
const ua = require('universal-analytics');

const data = require('./data');

const app = express();
const v = ua('UA-117987097-1');

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(__dirname + '/resources'));

app.get('/', function(req, res) {
    v.pageview('/', 'Home').send();
    res.render('index', {dd: JSON.stringify(data), active: '.home', title: 'Mason Phillips | MatrixSenpai'});
});
app.get('/professional', function(req, res) {
    v.pageview('/professional', 'Portfolio Page').send();
    res.render('prof', {dd: JSON.stringify(data), active: '.professional', title: 'Professional | Mason Phillips'});
});
app.get('/social', function(req, res) {
    v.pageview('/social', 'Social Page').send();
    res.render('social', {dd: JSON.stringify(data), active: '.social', title: 'Social | MatrixSenpai'});
});

app.get('/media/:link', function(req, res) {
    var social = req.params.link;

    v.pageview('/media/' + social, social).send();

    res.redirect(data.links[social]);
});

app.get('/download/resume', function(req, res) {
    res.download(__dirname + '/resources/downloads/Resume 2018.docx', 'Resume - Mason Phillips.docx');
})

const port = process.env.PORT || 8080
app.listen(port, () => console.log('Running on ' + port));