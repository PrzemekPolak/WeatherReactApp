import React from "react";

function WeatherImage(props) {
    return <div className="">
                <div>Kod pogody: {props.weathercode}</div>
                <div>
                <img src={require('../images/sunny.png')} alt='Weather symbol' />
                </div>
            </div>
}

export default WeatherImage;