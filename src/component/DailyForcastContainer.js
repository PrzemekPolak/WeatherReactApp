import React from "react";
import './DailyForcastContainer.css'

function DailyForcastContainer(props) {
    return <div className="ForcastContainer">
            <h3>Data: {props.time}</h3>
            <div>Temperatura minimalna: {props.temperatureMin}</div>
            <div>Temperatura maksymalna: {props.temperatureMax}</div>
        </div>;
}

export default DailyForcastContainer;
