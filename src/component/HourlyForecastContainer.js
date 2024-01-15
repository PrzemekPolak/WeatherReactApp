import React, { useEffect } from "react";
import HourlyTemperatureChart from './HourlyTemperatureChart.js'
import WeatherImage from './WeatherImage.js'

function HourlyForecastContainer(props) {
    // On smaller screens when selected, jump to the bottom where this component is placed
    useEffect(() => {
        if (document.body.clientWidth < 1500) {
            window.scrollTo(0, document.body.scrollHeight)
        }
    }, [props.selectedDay])

    var hourlyWeatherImageRow = []

    for (var i=0; i < props.weathercode.length; i++) {
        hourlyWeatherImageRow.push(
        <div className="mx-2 my-2 max-w-[70px]" key={props.time[i]+props.weathercode[i]+'div'}>
            <WeatherImage key={props.time[i]+props.weathercode[i]}
                weathercode={props.weathercode[i]}
                time={props.time[i]}
                smallSize={true}
            />
        </div>)
    }

    return <div className="bg-sky-200 dark:bg-stone-800 mx-8 pb-8 border-r-4 border-l-4 rounded-lg border-double border-sky-500 dark:border-stone-500">
                <div className="text-center">
                    {parseInt(props.selectedDay.substr(8, 9)) === new Date().getDate() ? 
                    'Prognoza pogody na następne 24 godziny'
                    : 'Prognoza pogody na ' + props.selectedDay}
                </div>
                <div className="overflow-auto h-96">
                    <div className=" h-64 w-[2200px]">
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

export default HourlyForecastContainer;