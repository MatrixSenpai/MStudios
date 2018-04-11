const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.use('/assets', express.static(__dirname + '/resources'));

app.get('/', function(req, res) {
    res.render('index');
});

app.listen(8080, () => console.log('Running on 8080'));