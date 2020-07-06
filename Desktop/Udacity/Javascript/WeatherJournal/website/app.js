/* Global Variables */

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';


// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Personal API Key for OpenWeatherMap API

let apiKey = '&appid=702b2d5deaf24a831d6750b83fcdfb4c';


// Event listener to add function to existing HTML DOM element

document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
	let zip = document.getElementById('zip').value;
	let content = document.getElementById('feelings').value;
	getWeather(baseURL, zip, apiKey)

	.then(function(data){
		console.log('data checkin ', data)
		let temp = data.main.temp;
		postData('/addData', {date:newDate, temp:temp, content:content} )
	})

	.then(function(){
		updateUI()
	});
};

/* Function to GET Web API Data*/

const getWeather = async(baseURL, zip, apiKey)=>{
	const res = await fetch(baseURL+zip+apiKey);
	try {
		const data = await res.json();
		console.log(data);
		postData('addData', data);
	} catch (error) {
		console.log("error", error);
	}
}

/* Function to POST data */

const postData = async ( url = '', data = {})=>{
	console.log(data)
	  const response = await fetch(url, {
	  method: 'POST',
	  credentials: 'same-origin',
	  headers: {
	  	'Content-Type': 'application/json',
	  },
	  body: JSON.stringify(data),

	});

	  try {
	  	const newData = await response.json();
	  	console.log(newData);
	  	return newData
	  } catch (error) {
	  	console.log("error", error);
	  }
}


const updateUI = async () => {
	const request = await fetch ('/all');
	try {
		const allData = await request.json();
		console.log(allData);
		document.getElementById('date').innerHTML = allData.date;
		document.getElementById('temp').innerHTML = allData.temp;
		document.getElementById('content').innerHTML = allData.content;
	} catch(error){
		console.log("error", error);
	}
}





