// request express to create a rout and response
var express = require('express');
var app = express();
var mysql = require('mysql');



var methodOverride = require('method-override');
app.use(methodOverride('_method'));

// to create one rout for all files in public folder
app.use(express.static('public'));

// Use EJS to Template Your Node Application
// set the view engine to ejs
app.set('view engine', 'ejs');


//you need this to be able to process information sent to a POST route
// to get req.body
// get inf from forms, post request
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());


// Initializes the connection variable to sync with a MySQL database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "match_db"
});


//getting questions from question table
app.get('/', function(req, res) {
    connection.query(
        "SELECT question FROM question GROUP BY id",
        function(err, response) {
            res.render('index', {
                question: response
            });

        });

});


//form, create a new record on submit
app.post('/submit', function(req, res) {
    // res.json(req.body);
    // req.body turns into an object
    connection.query(
        "INSERT INTO respond (person_name, question_id, answer_scale) VALUES (?, ?, ?)", [req.body.name, 1, req.body.answer1],
        function(err, response) {
            if (err) throw err;
        }
    );
    connection.query(
        "INSERT INTO respond (person_name, question_id, answer_scale) VALUES (?, ?, ?)", [req.body.name, 2, req.body.answer2],
        function(err, response) {
            if (err) throw err;
            res.redirect('/');
        }
    );
    console.log(req.body);
});








// Get all records
// app.get('/all', function(req, res){
//   connection.query(
//       "SELECT * FROM respond GROUP BY id",
//       function(err, response) {
//         res.render('all', {
//           records: response
//         });
//       });

// });












app.listen(3000);
console.log('3000 is your port');