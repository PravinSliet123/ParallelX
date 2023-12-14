import React, { useState } from 'react'
import './Digital.css'

function DigitalClock() {

    let time = new Date().toLocaleTimeString();

    const [ctime,setCtime] = useState(time)

    const updateTime = () =>{
        time = new Date().toLocaleTimeString();
        setCtime(time)
    }

    setInterval(updateTime,1000)

  return (
    <div className='clk'>
        {ctime}
    </div>
  )
}

export default DigitalClock