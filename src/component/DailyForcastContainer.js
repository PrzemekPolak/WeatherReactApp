import React from "react";

function DailyForcastContainer(props) {
    return <div className="rounded-lg border-double border-4 border-sky-500">
            <h3>Data: {props.time}</h3>
            <div>Temperatura minimalna: {props.temperatureMin}</div>
            <div>Temperatura maksymalna: {props.temperatureMax}</div>
            <div>Kod pogody: {props.weathercode}</div>
        </div>;
}

export default DailyForcastContainer;
