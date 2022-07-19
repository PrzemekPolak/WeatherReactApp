import React, { useState } from "react";
import ToggleSwitch from './ToggleSwitch.js'

function SettingsContainer(props) {
    // Update settings (selectedSetting is a name of clicked switch)
    function updateSettings(selectedSetting) {
        props.changeSettings(prevState => ({
            ...prevState,[selectedSetting]: !props.settings[selectedSetting]}))
    }
    // Update state of switch (toggleFunction points which one) and settings
    function updateSwitchState(checked, toggleFunction, switchName) {
        toggleFunction(checked)
        updateSettings(switchName)
    }
    // Watched variables of different toggle switches
    const [noIcons, noIconsSet] = useState(props.settings.noIcons)
    const [showy, showySet] = useState(props.settings.showy)


    return <div className="w-80 h-96 bg-white/[.95] md:bg-white/[.8] fixed top-0 right-0
            border-double border-4 border-black">
            <div className="text-[26px] text-center font-bold mr-[60px] my-5">
                Ustawienia
            </div>

            <div>
                <ToggleSwitch
                    checked={noIcons}
                    switchName='noIcons'
                    onChange={updateSwitchState}
                    toggleFunction={noIconsSet}
                    label='Tekst zamiast symbolu pogody'
                />
            </div>
            <div>
                <ToggleSwitch
                    checked={showy}
                    switchName='showy'
                    onChange={updateSwitchState}
                    toggleFunction={showySet}
                    label='Nazwa jakiegoś super ustawienia'
                />


            {props.settings.noIcons && (
                <div>noIcons test</div>
            )}
            {props.settings.showy && (
                <div>Y test</div>
            )}
            </div>
        </div>
}

export default SettingsContainer;
