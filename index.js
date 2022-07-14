const express = require('express');
const handlers=require('./users')

const app =express();
app.use(express.json());

app.get('/',(req,res)=>{ res.send(`Welcomw to user login`) })
app.get('/users',handlers.getUsers);
app.use(handlers.validator);
app.post('/register',handlers.registerUser);




app.listen(3002,()=>{
    console.log(`Server started listening at http://localhost:3002`)
})