import React from "react";

function DailyForcastContainer(props) {
    return <div className={props.isSelected !== props.time ? 'rounded-lg border-double border-4 border-sky-500' : 'bg-violet-700'}
                id={props.time} onClick={props.handleClick}>
            <h3>Data: {props.time}</h3>
            <div>Temperatura minimalna: {props.temperatureMin}</div>
            <div>Temperatura maksymalna: {props.temperatureMax}</div>
            <div>Kod pogody: {props.weathercode}</div>
            <img src={require('../images/sunny.png')} alt='Weather symbol' />
        </div>;
}

export default DailyForcastContainer;
