const Joi = require ('joi')//handling validation
const app = express()
const mysql = require ('mysql12')

//connect to DB
const con = mysql.createConnection({
host: process.env.DBHost ,
user: process.env.DBUser,
password: process.env.DBPassword,
database: process.env.DB 
})

con.connect(function(err){
  if (err)throw error;
  else{
    console.log("Connected with DB ")
  }

app.use(express.json())

const usersRouter = requiere('routes/users')
//cv paste for the rest 3 more at least 

app.use('/users',usersRouter)


//change for DB
const users = [
    { id:1,name:'user1'},
    { id:2,name:'user2'},
    { id:3,name:'user3'}
]

const port = 3000

app.listen(PORT,()=> console.log('lisening port '+ PORT))

//start to test with nodemon

con.end(function(err){
  if (err){
    return console.log('error:'+err.message)
  }
  console.log("Connection closed with DB")
})

}) 