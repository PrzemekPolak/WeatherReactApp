import React from "react";
import WeatherImage from './WeatherImage.js'

function DailyForcastContainer(props) {
    return <div className={props.isSelected !== props.time ? 'rounded-lg border-double border-4 border-sky-500' : 'bg-violet-700'}
                id={props.time} onClick={props.handleClick}>
            <h3>Data: {props.time}</h3>
            <div>Temperatura minimalna: {props.temperatureMin}</div>
            <div>Temperatura maksymalna: {props.temperatureMax}</div>
            <div className="mx-5 my-5">
                <WeatherImage
                    weathercode={props.weathercode}
                    time={props.time}
                />
            </div>
        </div>;
}

export default DailyForcastContainer;
