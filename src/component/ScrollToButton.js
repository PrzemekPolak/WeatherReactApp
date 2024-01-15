import React from "react";

function ScrollToButton(props) {
    function scrollTo() {
        const elem = document.getElementById(props.selectedDay)
        elem.scrollIntoView()
        props.setSelectedDay('')
    }

    return <div onClick={scrollTo}
                className="text-[48px] text-center font-bold cursor-pointer fixed right-3 bottom-10
                w-20 h-20 bg-sky-500 dark:bg-stone-500 rounded-[100%] border-2 border-black">
                &#8686;
            </div>
}

export default ScrollToButton;
