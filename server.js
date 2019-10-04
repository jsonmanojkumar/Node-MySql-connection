var express=require('express');
var mysql = require("mysql");

var app=express();

var connection=mysql.createConnection({
    host :'localhost',
    user : 'root',
    password:'',
    database:'user'
})


connection.connect(function(err){
if (!!err){
    console.log("error");
}else{
    console.log("connected ");
}
});

app.get('/', function(req,res){
    connection.query("SELECT * FROM student ",function(err,rows,filds){
        if(!!err){
            console.log("error in the query");  
        }else{
            console.log("successful query");
            res.send(rows);
        }
    });
})

app.listen(3000);