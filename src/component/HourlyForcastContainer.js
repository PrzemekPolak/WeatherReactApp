import React from "react";

function HourlyForcastContainer(props) {
    return <div>
                <div>
                    {props.time}
                </div>
                <div>
                    {props.temperature}
                </div>
                <div>
                    {props.weathercode}
                </div>
            </div>
}

export default HourlyForcastContainer;