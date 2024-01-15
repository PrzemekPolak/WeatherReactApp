import React from "react";
import {useStore} from "../store";

function HeaderLocalizationOption(props) {
    const {forecastData} = useStore()

    function onClickSelectLocalization() {
        if (false === forecastData.loadingData) {
            props.setCurrentLocalization(props.idName)

            if (props.idName === 'default') forecastData.useDataForDefaultLocalization()
            else forecastData.useDataForCurrentLocalization()
        }
    }

    return <div id={props.idName} onClick={onClickSelectLocalization}
                className={"text-[22px] border-double border-4 border-black justify-center items-center flex cursor-pointer "
                            + (props.currentLocalization === props.idName ? "w-52 h-24 bg-sky-500/[0.5] dark:bg-stone-800/[0.5]" : "w-44 h-20 hover:w-52 hover:h-24")}>
                {props.label}
            </div>
}

export default HeaderLocalizationOption;
