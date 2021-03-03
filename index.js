const express = require('express')
const app = express()

var bodyParser = require('body-parser')
app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
const mongoose = require('mongoose')

const router=require('./routers/questionRouter')




mongoose.connect('mongodb://localhost:27017/luca', {useNewUrlParser: true})
.then((result)=>{
    app.listen(3000)
}).catch((err)=>{
    console.log(err)
})


app.use('/',router)

