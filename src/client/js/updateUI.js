const updateUI = (projectData) => {

    const result = document.getElementById('result');
    result.innerHTML =
        `<div class="trip">
        
        <h2>Trip to: ${projectData.city}, ${projectData.country}</h2>
        <figure>
            <img class = "trip_img" src = "${projectData.imageUrl}" alt = "Trip to ${projectData.city}" />
            <figcaption>${projectData.city}, ${projectData.country}, image by pixabay.com</figcaption>
          </figure>
         
          <div class="trip_details">
          <div class="trip_info">
          <h3>Trip information</h3>
          <ul>
            <li>You're leaving on: ${projectData.departureDate}</li>
            <li>Days Until: ${projectData.countdown}</li>
            <li>Duration: ${projectData.duration} days</li>
          </ul>
          </div>
          <div class="trip_weather">
            <h3>Weather forecast</h3>
            <p><img class="icon" src="https://www.weatherbit.io/static/img/icons/${projectData.weatherIcon}.png" alt = "weather icon" /></p>
            <p>Expected weather: ${projectData.description}</p>
            <p class="max-temp">Max Temp: ${projectData.highTemp} &deg;C </p>
            <p class="min-temp">Min Temp: ${projectData.lowTemp} &deg;C </p>
            <p>Wind speed: ${projectData.windSpeed} direction: ${projectData.windDirection} </p>
            </div>
        </div>
        </div>`
};

export { updateUI };