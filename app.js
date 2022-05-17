const express = require("express");
const exphbs = require("express-handlebars");  // it's working like a template engine
const bodyParser = require ("body-parser"); // return Datas in JSON format and we can easily handle datas using this 
const mysql = require("mysql");

require("dotenv").config(); // using .ENV inclue constant value in project 


const app =express();    // creating object for express 
const port =process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended:false})); // middlewarae our data come Json format wecan use with bodyparser
app.use(bodyParser.json());


// including staic files in Express
app.use(express.static("public"))


// Tamplates Engine
const handlebars = exphbs.create({extname:".hbs"});
app.engine('hbs',handlebars.engine);
app.set("view engine","hbs");


//Router 
app.get('/',(req,res)=>{
res.render("home")
});




// listen Port 
app.listen(port,()=>{                                       // app.get('/', function(req, res){
    console.log("Listening Port :"+port);                    //     res.send('hello world'); 
});                                                           // });
    
                                                                // app.listen(3000);





