// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));
const port = 3000;

// Spin up the server
const server = app.listen(port, ()=> {
	console.log(`running on local host: ${port}`)
})
// Callback to debug


// Setup Server


// Initialize all route with a callback function


// Callback function to complete GET '/all'
app.get('/all', function(req, res){
	res.send(projectData);
});

// Post Route

app.post('/addData', addData);

function addData(req, res) {
	let data = req.body;
	console.log('server side',data);
  
	// Create new entry for JS Object Endpoint
	projectData["temp"] = data.temp;
	projectData["content"] = data.content;
	projectData["date"] = data.date;
  
	// Send response to Endpoint
	res.send(projectData);
  
	console.log('projectData ', projectData);
}

