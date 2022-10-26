const { Router } = require('express')
const express = require('express')
const router = express.Router()

//path to the thing
Router.get('/api/user',(req,res)=>{ 
    // the thing in DB
    res.send(users) // 
})

//get a sinlge one

Router.get('api/users/:id',(res,req)=>{
  const user= users.find(c => c.id === parseInt(req.params.id))
  if(!user) return res.status(404).send('User not found')// 404 not found
  res.send(user)

})

Router.post(`/api/users`, (req,res)=>{
  const {error} = validateUser(req.body)

  //if (result.error){
    if (error) return res.status(400).send(result.error.details[0].message)// too much to handle so only get first error
    
    /*input validation for security (usign joi now)

    if(!req.body.name || req.body.name.lenght <3){
        res.status(400).send('Name is requierd')
        return //to kill all
    }
    const users = {
        //id assigned by DB
    // id:
    name: req.body.name //parshin  enable go to top
    }
    users.push(user)
    res.send(user)
    */
})

Router.put('/api/users/:id',(req,res)=>{
    //look if this user id exists if not return 404
    const user= users.find(c => c.id === parseInt(req.params.id))

    if(!user) return res.status(404).send('User not found')
    // 404 not found

 /* if(!user){ 
    res.status(404).send('User not found')
    return
  }// 404 not found */

   //validate

    //invalid return 400 bad request
   /* funtion validate user niw
    const schema = {
        name: Joi.string().min(3).required()
        }

      const result=  Joi.ValidationError(req.body,schema)*/
//const result = validateUser(req.body) //object destructuring or something
const {error} = validateUser(req.body)

//if (result.error){
  if (error) return res.status(400).send(result.error.details[0].message)// too much to handle so only get first error

    //update user
user.name = req.body.name

    //return updated user
    res.send(user)
})

function validateUser(user){
    const schema = {
        name: Joi.string().min(3).required()
        }

    return Joi.validate(user,schema)
}


Router.delete(`/api/users/:id`,(req,res)=>{
  // Look up user 
  //does not exist retun 404

  const user= users.find(c => c.id === parseInt(req.params.id))
  if(!user) return res.status(404).send('User not found')// 404 not found

  //Delete
  const index = users.indexOf(user)
  users.splice(index,1)

  //Return 404
  res.send(user)
})


module.exports = router