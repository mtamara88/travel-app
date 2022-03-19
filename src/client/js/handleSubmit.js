async function handleSubmit(e) {

    let projectData = {};

    e.preventDefault();

    const destination = document.getElementById("destination").value;
    const startDate = document.getElementById("startDate").value;
    const endDate = document.getElementById("endDate").value;
    const departureDate = Date.parse(startDate);

    // determine how many days are left until departure
    let now = new Date().getTime();
    const daysToDeparture = Math.round((departureDate - now) / (1000 * 60 * 60 * 24));

    // calculate the trip duration
    const tripDuration = Math.round((Date.parse(endDate) - Date.parse(startDate)) / (1000 * 60 * 60 * 24));

    if (Client.validate(destination, startDate, endDate)) {

        const coordinates = await Client.getData('/getLocation', { location: destination })

        const weather = await Client.getData('/getWeather', { lat: coordinates.latitude, long: coordinates.longitude });

        // handling which weather forecast will be displayed depending on if the departure date is within a week
        let forecastFor = 0;

        if (daysToDeparture <= 7) {
            forecastFor = 0;
        } else { forecastFor = daysToDeparture };

        const image = await Client.getData('/getPhoto', { city: destination });

        // building up the object for the information to be shown as result based on the user entered data an responses of three different APIs        

        projectData = {
            city: coordinates.name,
            country: coordinates.country,
            departureDate: startDate,
            countdown: daysToDeparture,
            duration: tripDuration,
            imageUrl: image.hits[0].largeImageURL,
            description: weather.data[forecastFor].weather.description,
            highTemp: weather.data[forecastFor].high_temp,
            lowTemp: weather.data[forecastFor].low_temp,
            windSpeed: weather.data[forecastFor].wind_spd,
            windDirection: weather.data[forecastFor].wind_cdir_full,
            uvIndex: weather.data[forecastFor].uv,
            weatherIcon: weather.data[forecastFor].weather.icon
        }

        console.log(projectData);

        // displaying the result
        Client.updateUI(projectData);

    }
}

async function getData(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
}

export { handleSubmit, getData }