const express = require("express");

// creating object for express 
const app =express();
const port =process.env.PORT || 3000;

// listen Port 
app.listen(port,()=>{
console.log("Listening Port :"+port);
});

// app.get('/', function(req, res){
//     res.send('hello world'); 
// });

// app.listen(3000);

