// express.Router()

const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
app.use(express.json());
app.use(express.static('public'));

const router = require('./theRouter');
app.use('/', router);
app.use('/user', router);



app.listen(3000);