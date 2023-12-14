import React, { useEffect, useState } from 'react'

function TimeZone({ next }) {
    const [currentDate, setCurrentDate] = useState(0)
    const [timeZones, setTimeZones] = useState([])
    return (
        <div
            style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center"
            }}
        >
            <div
                onClick={() => {
                    if (!currentDate) return
                    setCurrentDate(prev => prev - 1)
                    next(timeZones[currentDate - 1].time);

                }}
                style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    height: "15px",
                    width: "15px",
                    borderRadius: "50%",
                    boxShadow: "1px 2px 3px 1px #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${currentDate === 0 ? "white" : "#5FB47D"}`,
                    color: `${currentDate === 0 ? "#5FB47D" : "white"}`
                }}>{"<"}</div>
            <div>{timeZones[currentDate]?.name}</div>
            <div

                style={{
                    fontSize: "20px",
                    cursor: "pointer",
                    height: "15px",
                    width: "15px",
                    borderRadius: "50%",
                    boxShadow: "1px 2px 3px 1px #ccc",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: `${timeZones.length - 1 === currentDate ? "#fff" : "#5FB47D"}`,
                    color: `${timeZones.length - 1 === currentDate ? "#5FB47D" : "white"}`
                }}

                onClick={() => {
                    if (timeZones.length - 1 === currentDate) return
                    next(timeZones[currentDate + 1]?.time);
                    setCurrentDate(prev => prev + 1)

                }}
            >{">"}</div>
        </div>
    )
}

export default TimeZone