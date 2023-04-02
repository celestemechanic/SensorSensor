//routing constant
const router = require('express').Router
//router wrapped
const routerw2 = router()

//routing to the '/devices' page
routerw2.get('/', (req,res)=>{
    //device list connected to the ESP32
    const devices = [{
        //ID code
        id:123,
        //device name
        Nome: "Sonar Sensor",
        //trigger frequencia
        Trigger: 12,
        //how many centimeters
        Centimeters: 12,
    }]
    res.json({
        success: true,
        devices: devices
    })
})

module.exports = routerw2