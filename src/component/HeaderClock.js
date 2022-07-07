import React, { useState, useEffect } from "react";

function HeaderClock() {
    const [time, updateTime] = useState(0)
    const [date, updateDate] = useState(0)

    useEffect(() => {
        setInterval(() => {
            updateTime(Intl.DateTimeFormat(navigator.language, {
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric'
            }).format())
            updateDate(Intl.DateTimeFormat(navigator.language, {
                day: 'numeric',
                month: 'numeric',
                year: 'numeric'
            }).format())
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