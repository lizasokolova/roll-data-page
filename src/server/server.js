const express = require('express');
const path = require('path');
const app = express();
const ROLLS = require('./data.json');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
};

app.use(express.static(path.join(__dirname, 'build')));

app.get('/api/rolls', function (req, res) {
    return res.send(ROLLS.map(item => {
        item.id = getRandomInt(1, 10000);
        return item;
    }));
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);