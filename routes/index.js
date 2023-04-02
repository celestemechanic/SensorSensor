//routing constant
const router = require('express').Router
//organizing the router's wrapper
const routerw1 = router()
//constant to require the devices
const devices = require('./devices')
//redirect the '/devices/' to devices
routerw1.use('/devices', devices)
//if the client require the '/api/' page...
routerw1.get('/', (req, res) => {
    res.json({     
        //return false
        success: false,
        //alert the client
        message: "Restricted Page!"
    })
})

module.exports = routerw1
