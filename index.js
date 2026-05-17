const express= require('express')
const app=express()
const PORT= process.env.PORT ?? 8080

app.get('/', (req,res)=>{
    return res.json({msg: "Hello from the server, this message has been updated"})
})
app.listen(PORT, ()=>{
    console.log(`Server up and running on port: ${PORT}`)
})