import React, { useEffect, useState } from 'react'

function StopWatch() {

    const [hour,setHour] = useState(0);
    const [min,setMin] = useState(0);
    const [sec,setSec] = useState(0)
    const [start,setStart] = useState(true)
    const [pause,setPause] = useState(false)

    const updatetime = () =>{
        

        const delay = setInterval(()=>{
            setSec(sec+1)
        if(sec == 60){
            setMin(min+1)
            setSec(0)
        }else if(min == 60){
            setHour(hour+1)
            setMin(0)
            setSec(0)
        }
        },1000)
    }

    /*const updatetime1 = () =>{
        /*const delay = setInterval(()=>{
            updatetime()
        },1000)
        return ()=>clearInterval(delay)
        setInterval(updatetime,1000)
        setStart(false)
        setPause(true)
    }*/

    

    useEffect(()=>{
        
        //return ()=>clearInterval(delay)
    },[])
    
    const pausetime = () =>{
        clearInterval(updatetime)
    }

    const restart = () =>{
        setHour(0)
        setMin(0)
        setSec(0)
    }

    //setInterval(updatetime,1000)
  return (
    <div>{hour}:{min} : {sec}
    {start ? <button onClick={updatetime}>Start</button> :""}
    <button onClick={restart}>Restart</button>
    {pause ? <button onClick={pausetime} >Pause</button>: ""}
    </div>
  )
}

export default StopWatch