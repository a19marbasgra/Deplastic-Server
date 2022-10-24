const Joi = require ('joi')//handling validation
import 'express';
import express from 'express';
const app = express()

app.use(express.json())


//change for DB
const users = [
    { id:1,name:'user1'},
    { id:2,name:'user2'},
    { id:3,name:'user3'}
]
//path to the thing
app.get('/api/user',(req,res)=>{ 
    // the thing in DB
res.send(users) // 
})
//get a sinlge one

app.get('api/users/:id',(res,req)=>{
  const users= users.find(c => c.id === parseInt(req.params.id))
  if(!users) res.status(404).send('User not found')// 404 not found
  res.send(users)

})

app.post(`/api/users`, (req,res)=>{
    const schema = {
        name: Joi.string().min(3).required()
        }

      const result=  Joi.ValidationError(req.body,schema)
      console.log(result)

      if (result.error){
        res.status(400).send(result.error.details[0].message)// too much to handle so only get first error
      }
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
app.put('/api/users/:id',(req,res)=>{
    //look if this user id exists if not return 404
    const users= users.find(c => c.id === parseInt(req.params.id))
  if(!users) res.status(404).send('User not found')// 404 not found
   //validate

    //invalid return 400 bad request
    const schema = {
        name: Joi.string().min(3).required()
        }

      const result=  Joi.ValidationError(req.body,schema)
      if (result.error){
        res.status(400).send(result.error.details[0].message)// too much to handle so only get first error
      }

    //updated user
users.name = req.body.name
    //return updated user
    res.send(user)
})

function validateUser(users){
    const schema = {
        name: Joi.string().min(3).required()
        }

    return Joi.validate(user,schema)

}

const port = 3000

app.listen(PORT,()=> console.log('lisening port '+ PORT))



app.post()
app.put()
app.delete()


//start to test with nodemon