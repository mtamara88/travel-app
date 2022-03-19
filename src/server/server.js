// Setup env for API keys
const dotenv = require('dotenv');
dotenv.config();

//Global variables and express
const fetch = require("node-fetch");
const express = require('express');
const app = express();

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors 
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'));

// Spin up the server
const port = 8080;
const server = app.listen(port, listening);

app.get('/', function(req, res) {
    res.sendFile('dist/index.html');
    //res.sendFile(path.resolve('/src/client/views/index.html'))

})

// Callback to debug
function listening() {
    console.log(`Server running on localhost: ${port}`);
}
app.post('/getLocation', async(req, res) => {
    const url = `http://api.geonames.org/searchJSON?q=${req.body.location}&maxRows=1&username=${process.env.GEONAMES_USERNAME}`;
    console.log(url);
    const response = await fetch(url);
    try {
        const data = await response.json();
        let coordinates = {
            name: data.geonames[0].name,
            country: data.geonames[0].countryName,
            latitude: data.geonames[0].lat,
            longitude: data.geonames[0].lng
        };
        res.send(coordinates);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getWeather', async(req, res) => {
    console.log(req);
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?lat=${req.body.lat}&lon=${req.body.long}&key=${process.env.WEATHERBIT_API_KEY}`;
    console.log(url);
    const response = await fetch(url);
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("Error", error);
    }
})

app.post('/getPhoto', async(req, res) => {
    const url = `https://pixabay.com/api/?key=${process.env.PIXABAY_API_KEY}&q=${req.body.city}&image_type=photo`;
    const response = await fetch(url)
    try {
        const data = await response.json();
        res.send(data);
    } catch (error) {
        console.log("Error", error);
    }
})