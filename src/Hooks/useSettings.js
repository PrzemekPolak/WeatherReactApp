import {useState} from "react";

export const useSettings = () => {
    const [noIcons, setNoIcons] = useState(false);
    const [darkMode, setDarkMode] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

    const changeNoIcons = () => {
        setNoIcons(!noIcons);
    }

    const changeDarkMode = () => {
        setDarkMode(!darkMode);
    }

    return {
        noIcons,
        changeNoIcons,
        darkMode,
        changeDarkMode,
    }
}