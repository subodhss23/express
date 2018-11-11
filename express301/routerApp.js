// express.Router()

const express = require('express');
const app = express();
const helmet = require('helmet');
app.use(helmet());
app.use(expres.json());
app.use(express.static('public'));


app.listen(3000);