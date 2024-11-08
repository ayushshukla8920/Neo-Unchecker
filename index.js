//Importing and Initialising Express
const express = require('express');
const app = express();

//Importing CORS framework
const cors = require('cors');

//Middleware to Handle CORS(Cross-origin Resource Sharing)
app.use(cors());

//Route for responding to Environment check calls
app.get('/status',(req,res)=>{
    console.log("Request Recieved for Status...Sending Response 'OK'");
    res.send('eyJzdGF0dXMiOnRydWUsIm1lc3NhZ2UiOiJTeXN0ZW0gaXMgc2FmZSJ9');
})

//Main Route of Application
app.get('/',(req,res)=>{
    res.send('Welcome to the iamneo secure browser');
})

//Running the server at Port 9999 with Url http://127.0.0.1:9999
app.listen(9999,()=>{
    console.log(`\nServer Running at PORT : 9999\n\n`);
})
