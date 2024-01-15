import React, { useState, useEffect } from "react";

function HeaderClock() {
    const currentTime = () => {
        return Intl.DateTimeFormat(navigator.language, {
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric'
        }).format()
    }

    const currentDate = () => {
        return Intl.DateTimeFormat(navigator.language, {
            day: 'numeric',
            month: 'numeric',
            year: 'numeric'
        }).format()
    }

    const [time, updateTime] = useState(currentTime());
    const [date, updateDate] = useState(currentDate());

    useEffect(() => {
        setInterval(() => {
            updateTime(currentTime())
            updateDate(currentDate())
        }, 1000)
    }, [])

    return <div>
                <div className="text-[26px] font-bold text-center">
                    {date}
                </div>
                <div className="text-[40px] font-bold text-center">
                    {time}
                </div>
            </div>
}

export default HeaderClock;