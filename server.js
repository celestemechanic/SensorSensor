//constant to require the ExpressJS
const express = require('express')
//app is a wrapper to the express constant
const app = express()
//inclue the routes in ./routes/
const api = require('./routes')
//redirect '/api' to the routes
app.use('/api', api)
//application's LAN Port
const PORT = 3080

//routing: the website redirects the client to the content below
//in this case, it will be the initial page...
app.get('/', (req, res)=>{
    res.json({
        //return true
        success: true
    })
})

app.listen(PORT)