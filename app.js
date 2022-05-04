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

//localhost:3000/explorersInNode
app.get('/explorersInNode',(req, res)=>{
    const explorer1 = {name: "Explorer1", msg: "Hello"}
    const explorer2 = {name: "Explorer2", msg: "Hello"}
    const explorer3 = {name: "Explorer3", msg: "Hello"}
    res.send([explorer1,explorer2, explorer3])
})//cuando alguien entre a esta url le aparecera este mensaje

//localhost:3000/explorers/ceciliamuñoz
app.get('/explorers/:explorerName',(req, res)=>{
    console.log(req.params) //{explorer: "cecilia"}
    res.send(req.params)
})//cuando alguien entre a esta url le aparecera este mensaje

//con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`)
})