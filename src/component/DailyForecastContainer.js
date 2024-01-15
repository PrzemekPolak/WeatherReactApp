import React from "react";
import WeatherImage from './WeatherImage.js'

function DailyForecastContainer(props) {
    function selectDailyForecast(event) {
        if (props.isSelected === event.currentTarget.id) {
            props.setSelectedDay('')
        }
        else {
            props.setSelectedDay(event.currentTarget.id)
        }
    }

    return <div className={'cursor-pointer rounded-lg border-double border-4 border-sky-500 dark:border-stone-500 w-[150px] md:w-[180px] '
                + (props.isSelected === props.time ? 'bg-sky-500 dark:bg-stone-500 border-b-0 relative bottom-4' : 'hover:relative hover:bottom-1 lg:hover:bottom-4')}
                id={props.time} onClick={selectDailyForecast}>
            <div className="truncate text-[25px] text-center underline underline-offset-8 my-2">{props.time}</div>
            <div className="flex justify-center my-4">
                <div className="truncate font-bold text-[30px]">
                    {props.temperatureMax + ' /\xa0'}</div>
                <div className="truncate font-semibold text-gray-600 dark:text-gray-400 text-[26px] self-end">
                    {props.temperatureMin}</div>
            </div>
            <div className="my-2">
                <WeatherImage
                    weathercode={props.weathercode}
                    time={props.time}
                    smallSize={false}
                />
            </div>
        </div>
}

export default DailyForecastContainer;
