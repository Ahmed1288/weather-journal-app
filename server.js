// Setup empty JS object to act as endpoint for all routes
 projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
const bodyParser = require('body-parser');
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('website'));

const port = 3000;
// Setup Server
const server = app.listen(port,listening);
function listening(){
    console.log(`runing on localhost: ${port}`);
};
// Get route

app.get('/all',getAll);
function getAll(request,response){
  response.send(projectData);
};
const postData = (req,res)=>{
    projectData = req.body;
    console.log(projectData);
    res.send(projectData);
    
 }
//post route
app.post('/add',postData);
// function postData(req,res){
    
//     newContent = {
//         data: req.body.data,
//         temp: req.body.temp,
//         content: req.body.content
//     }
//     projectData=newContent;
// };

// const data = [];
// app.post('/add',postData);
// function postData(req,res){
//     res.send(projectData);
//     data.push(req.body);
// };