const express = require('express')
const app = express()
const port = 3000 //localhost:3000

//esto es sintaxis de express
app.get('/',(req, res)=>{
     res.send('Hello World!')
})//cuando alguien entre a esta url le aparecera este mensaje

//localhost:3000/launchx
app.get('/launchx',(req, res)=>{
    res.send('Bienvenidos a launchx')
})//cuando alguien entre a esta url le aparecera este mensaje

//con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})