import React from "react";

function ToggleSwitch(props) {
    return <div className="flex flex-row my-2">
        <div className="text-lg basis-3/4 ml-2">
            {props.label}
        </div>
        <div className="basis-1/4 flex justify-center items-center">
            <label className="w-[56px] h-[32px] inline-block relative">
                <input className="peer appearance-none"
                    type="checkbox"
                    checked={props.checked}
                    onChange={props.toggleFunction}
                />
                <div className="cursor-pointer bg-[#bdbbbb] absolute bottom-0 top-0
                    left-0 right-0 transition duration-500 rounded-full
                    before:rounded-[50%] before:w-[24px] before:h-[24px]
                    before:absolute before:left-[4px] before:bottom-[4px]
                    before:bg-white before:transition before:duration-500
                    peer-checked:before:translate-x-[24px] peer-checked:bg-[#1484de]
                    dark:peer-checked:bg-stone-400 dark:bg-stone-600 dark:before:bg-stone-800">
                </div>
            </label>
        </div>
    </div>
}

export default ToggleSwitch;
