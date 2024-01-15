export default function prepareHourlyData(hourlyData) {
    var result = {}       
    // Create dictionary with correct keys based on data
    for (var i=0; i<hourlyData.time.length; i++) {
        const id = hourlyData.time[i].substr(0, 10)
        result[id] = {
            time: [],
            temperature: [],
            weathercode: [],
        }
    }
    // Add values to dictionary
    for (var x=0; x<hourlyData.time.length; x++) {
        const id = hourlyData.time[x].substr(0, 10)
        const time = hourlyData.time[x].substr(11, 5)
        result[id].time.push(time)
        result[id].temperature.push(hourlyData.temperature_2m[x])
        result[id].weathercode.push(hourlyData.weathercode[x])
    }
    // Current day should show next 24 hours
    var currentHour = new Date().getHours()
    var newTime = [...Object.values(result)[0].time.slice(currentHour,24), ...Object.values(result)[1].time.slice(0,currentHour)]
    var newTemperature = [...Object.values(result)[0].temperature.slice(currentHour,24), ...Object.values(result)[1].temperature.slice(0,currentHour)]
    var newWeathercode = [...Object.values(result)[0].weathercode.slice(currentHour,24), ...Object.values(result)[1].weathercode.slice(0,currentHour)]
    Object.values(result)[0].time = newTime
    Object.values(result)[0].temperature = newTemperature
    Object.values(result)[0].weathercode = newWeathercode
    return result
}