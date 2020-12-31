const express = require('express');
const server = express();

require('dotenv').config();
server.use(require('./app'));

server.listen(5000, () => {
    console.log('Servidor iniciado! ');
})