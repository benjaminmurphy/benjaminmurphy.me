"use strict";

let path = require('path');
let express = require('express');

let app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.listen(80);
