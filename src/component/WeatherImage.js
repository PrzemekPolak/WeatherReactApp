import React from "react";

function WeatherImage(props) {
    var weathercodeToImage = {
        0: 'weathercode-0',
        1: 'weathercode-0', 2: 'weathercode-0', 3: 'weathercode-0', 
        45: 'weathercode-0', 48: 'weathercode-0', 
        51: 'weathercode-0', 53: 'weathercode-0', 55: 'weathercode-0',
        56: 'weathercode-0', 57: 'weathercode-0',
        61: 'weathercode-0', 63: 'weathercode-0', 65: 'weathercode-0',
        66: 'weathercode-0', 67: 'weathercode-0',
        71: 'weathercode-0', 73: 'weathercode-0', 75: 'weathercode-0',
        77: 'weathercode-0',
        80: 'weathercode-82', 81: 'weathercode-82', 82: 'weathercode-82',
        85: 'weathercode-0', 86: 'weathercode-0',
        95: 'weathercode-95', 96: 'weathercode-95', 99: 'weathercode-95',
    }

    // Depending on hour add night images
    var imageName = weathercodeToImage[props.weathercode]
    var currentHour = parseInt(props.time.substr(0, 2))
    if (currentHour > 20 || currentHour < 6) {
        // imageName += 'n'
        // placeholder
        imageName = 'weathercode-1n'
    }

    return <div>
                <img src={require(`../images/${imageName}.png`)} alt='Weather symbol' />
            </div>
}

export default WeatherImage;