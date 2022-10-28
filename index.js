const mysql = require ("mysql2")

let con = mysql.createConnection({
    host : env.process.host ,
    user : env.process.user ,
    password : env.process.password ,
    database : env.process.database 

})
con.createConnection(function(err){
    if (err) throw err
    else {
        console.log("Connected to DB")

        
        con.query("SELECT * FROM users", function(err,result,fields){
            if (err) throw err;
            console.log(result)
        })
    
        
    
        
        
        
        
        
        con.end(function(err){
            if (err){
                return console.log("error:"+err.message)
            }
            console.log("Closed connection with DB")
        })
    }
})