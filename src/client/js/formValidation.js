function validate(city, startDate, endDate) {
    let now = new Date().getTime();
    // validating if destination is provided
    if (city == "") {
        alert('Please enter your destination');
        return false;
    }
    // validating if start and end date are provided
    if (startDate == "" || endDate == "") {
        alert('Please select your departure end return date');
        return false;
    }
    // validating that start date is not in the past and that return date is in future
    if (Date.parse(startDate) < now || Date.parse(endDate) <= now) {
        alert('Departure and return date must be in future');
        return false;
    }
    // validating that end date is after start date
    if (startDate >= endDate) {
        alert('Return date must be after the departure date');
        return false;
    }
    return true;
}

export { validate };