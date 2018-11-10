const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res, next) =>{
    res.send("checking that frontend is working");
});

app.get('/login', (req, res, next) =>{
    res.render('login');
})


app.post('/process_login',(req, res, next) =>{

    // res.body is made by urlcoded, which parses the http message for sent data!
    const password = req.body.password;
    const username = req.body.username;
    //check the database to see if user credentials are valid
    //if they are valid
    // - save their username is a cookie
    // - is send them to the welcome page

        if (password === 'x'){
            // res.cookie takes 2 args:
            //     1. name of the cookie  
            //     2. value of set it to
                res.cookie('username', username);
                // res.redirect takes 1 argument:
                //  1: where to send the browser
                 res.redirect('/welcome');
        }
        else{
                 res.redirect('login?msg=fail');
           
        }
    // res.json(req.body);
});

app.get('/welcome',(req, res, next) => {

    // req.cookies object will have a property for every named cookie
    // that has been set.
    res.render('welcome',{
        username: req.cookies.username
    });
});

app.get('/logout', (req, res, next) =>{
    //res.clearCookie takes 1 arg:
    //1, Cookie to clear (by name)
    res.clearCookie('username');
    res.redirect('/login');
})

app.listen(3000);
console.log('server is firing smoothly');