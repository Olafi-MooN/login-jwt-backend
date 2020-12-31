const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(require('body-parser').json());
app.use(require('./routes/route'));

module.exports = app;