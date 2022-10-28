const { Router } = require('express')
const express = require('express')
const { stringify } = require('querystring')
const router = express.Router()

//path to the thing
Router.get('/api/user',(req,res)=>{ 

  sql.connect(con, function(){
    let request = new sql.Request()
    request.query("select*from Users",function (err,recordset){
      if (err) console.log(err)
      res.end(JSON,stringify(recordset))
    })
  })
})

//get a sinlge one

Router.get('/api/user:id',(req,res=>{
  sql.connect(con,function(){
    let request = new sql.Request()
    request.query("select*from Users Where userdID= "+req.parms.userID,function(err,recordset){
      if (err) console.log(err)
      res.end(JSON,stringify(recordset))
    })
  })
}))

module.exports = usersRouter