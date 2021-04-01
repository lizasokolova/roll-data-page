const express = require('express');
const path = require('path');
const app = express();
const ROLLS = require('./data.json');

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/rolls', function (req, res) {
    return res.send(ROLLS);
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);