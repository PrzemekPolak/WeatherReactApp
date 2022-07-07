import React from "react";
import HourlyTemperatureChart from './HourlyTemperatureChart.js'
import WeatherImage from './WeatherImage.js'

function HourlyForcastContainer(props) {
    var hourlyWeatherImageRow = []

    for (var i=0; i < props.weathercode.length; i++) {
        hourlyWeatherImageRow.push(
        <div className="mx-2 my-2 max-w-[70px]" key={props.time[i]+props.weathercode[i]+'div'}>
            <WeatherImage key={props.time[i]+props.weathercode[i]}
                weathercode={props.weathercode[i]}
                time={props.time[i]}
            />
        </div>)
    }

    return <div>
                <div className="text-center">
                    {parseInt(props.selectedDay.substr(8, 9)) === new Date().getDate() ? 
                    'Prognoza pogody na 24 godziny'
                    : 'Prognoza pogody na ' + props.selectedDay}
                </div>
                <div className="overflow-auto h-96">
                    <div className="mx-10 h-64 w-[2200px]">
                        <HourlyTemperatureChart key={props.time}
                            time={props.time}
                            temperature={props.temperature}
                            weathercode={props.weathercode}
                        />
                        <div className="flex w-[2215px] justify-between -ml-1">
                            {hourlyWeatherImageRow}
                        </div>
                    </div>
                </div>
            </div>
}

export default HourlyForcastContainer;