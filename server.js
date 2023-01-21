const express = require('express');
const app = express();
const UserModel = require('./model/user');
const {updateDocument, createuser,getIdOfUser } = require('./controller/usercont');
const nodemail = require('./controller/nodemail');
const path = require('path');


// built-in middleware to handle urlencoded form data
app.use(express.urlencoded({ extended: false }));

//serve static files
app.use('/', express.static(path.join(__dirname, '/public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'views','index.html'));
})

app.post('/',(req,res)=>{
    try{
    console.log(req.body);
    createuser(req);
    nodemail(req.body);
   // res.setTimeout(5000);
    res.send("Verification mail has sent to you, please verify");
    }
    catch(err){
        throw err;
    }
})

app.get('/verify/:email',(req,res)=>{
    console.log(req.params.email);
    updateDocument(req.params.email);
    res.sendFile(path.join(__dirname,'views','success.html'));
})


app.listen(8080,()=>{
    console.log("Connected to port 3000")
})
