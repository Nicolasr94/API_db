import express from 'express';
const app = express();
const port = 3305;


app.get('/',(req,res) => { 
    res.send('Hello');
})

app.listen(port,()=>{
    console.log(`The server is up on PORT:${port}`);
})