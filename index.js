var exp = require('express')
var app = exp()
var parser = require('body-parser')

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
//const server = http.createServer(handleRequest);
// var connectionString = 'postgres://postgres' + ':' + process.env.POSTGRES_PASSWORD + '@localhost/blog';
// console.log(process.env.DATABASE_URL)
// var connectionString = process.env.DATABASE_URL
var connectionString = 'postgres://rqyuuegdamtgnm:c18a72bfca04876804550396dc037c0933e8d5abd53aa67af572497c34718e72@ec2-54-243-235-153.compute-1.amazonaws.com:5432/dbadqlplncc2qi'
const PORT = process.env.PORT || 8080;
const {Client} = require('pg')


app.set('view engine', 'ejs')

app.use(exp.static('public'))
app.use(exp.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    res.send('hello world')
})

app.listen(PORT,()=>{
    console.log("online")
})