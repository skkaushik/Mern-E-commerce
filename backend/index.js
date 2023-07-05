const express=require('express');

const app=express();


app.get('/',(req,res)=>{
    res.send("This is Working........")
});

app.listen(5000);