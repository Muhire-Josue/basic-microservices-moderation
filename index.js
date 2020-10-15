const express = require('express');
const axios = require('axios');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());
app.use(morgan('dev'));

app.post('/events', (req, res) => {

});

app.listen(4003, () => console.log('Server Running on port 4003'));
