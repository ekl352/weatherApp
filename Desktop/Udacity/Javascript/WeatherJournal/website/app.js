/* Global Variables */

let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';


// Personal API Key for OpenWeatherMap API

let apiKey = '&appid=702b2d5deaf24a831d6750b83fcdfb4c';

let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();


document.getElementById('generate').addEventListener('click', performAction);

/* Function called by event listener */
function performAction(e){
	let zip = document.getElementById('zip').value;
    let content = document.getElementById('feelings').value;
    getWeather(baseURL, zip, apiKey)
   .then(function(data){
      console.log('data checkin ', data)
      let temp = data.main.temp;
      postData('/addData', {temp:temp, content:content, date:newDate})
     })

	 .then(function(){
		updateUI()
	  }
	   );

};

/* Function to GET Web API Data*/

const getWeather = async (baseURL, zip, key)=>{
    // Use the fetch API to retrieve the current weather data for the users zip code
    const res = await fetch(baseURL+zip+key)
    try {

      const data = await res.json();
      return data;
    }  catch(error) {
      console.log("error", error);
      // appropriately handle the error
    }
}

/* Function to POST data */

const postData = async ( url = '', data = {})=>{

	console.log('data ',data)
    const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    // mode: 'cors', // no-cors, cors, *same-origin
    // cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json',
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(data), // body data type must match "Content-Type" header        
  });

    try {
      const newData = await response.json();
      // console.log(newData);
      return newData
      console.log("newData ", newData);
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
    }
}


const updateUI = async () => {
	const request = await fetch ('/all');
	try {
		const allData = await request.json();
		console.log('all data: ',allData);
		document.getElementById('date').innerHTML = allData.date;
		document.getElementById('temp').innerHTML = allData.temp;
		document.getElementById('content').innerHTML = allData.content;
	} catch(error){
		console.log("error", error);
	}
}
