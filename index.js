var exp = require('express')
var app = exp()
var parser = require('body-parser')

// Create a server, uses `handleRequest` which is function that takes
// care of providing requested data
//const server = http.createServer(handleRequest);
// var connectionString = 'postgres://postgres' + ':' + process.env.POSTGRES_PASSWORD + '@localhost/blog';
// console.log(process.env.DATABASE_URL)

// var connectionString = process.env.DATABASE_URL

//Created postgresql-metric-78193 as DATABASE_URL
//CLI heroku pg:psql postgresql-metric-78193 --app quiz-ttp
var connectionString = 'postgres://tgihklmlxbnwis:de88c96921a936d483e316958dff8c539f3cfab1348cd342aff3ae1838a4aecc@ec2-50-19-86-139.compute-1.amazonaws.com:5432/d2r2s748gava4s'
const PORT = process.env.PORT || 8080;
const {Client} = require('pg')
//db instance

app.set('view engine', 'ejs')

app.use(exp.static('public'))
app.use(exp.json())
app.use(parser.urlencoded({ extended: true }))

app.get('/',(req,res)=>{
    // res.send('hello world')
    res.render('quiz')
})

app.post('/post',(req,res)=>{
    res.redirect('/')
})

app.listen(PORT,()=>{
    console.log("online")
})