var express = require('express');
var app = express();

app.use(express.static(__dirname +'./src/index.html'));

app.listen(3000);