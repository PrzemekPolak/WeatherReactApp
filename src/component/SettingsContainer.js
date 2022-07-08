import React from "react";

function SettingsContainer(props) {

    function updateSettings(childData) {
        var x = !props.settings[childData]
        props.changeSettings(prevState => ({
            ...prevState,[childData]: x}))
    }
    return <div className="w-60 h-96 bg-white/[.8] fixed top-0 right-0
            border-double border-4 border-black">
            <div className="text-[26px] text-center font-bold mr-[60px] mt-5">
                Ustawienia
            </div>
            {props.settings.showx && (
                <div>X test</div>
            )}
            {props.settings.showy && (
                <div>Y test</div>
            )}
                <div>
                    <button onClick={() => updateSettings('showx')}
                >showx: {props.settings.showx}</button>
                </div>
                <div>
                    <button onClick={() => updateSettings('showy')}
                >showy: {props.settings.showy}</button>
                </div>
        </div>
}

export default SettingsContainer;
