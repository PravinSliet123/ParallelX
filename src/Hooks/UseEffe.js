import React, { useEffect, useState } from 'react'

function UseEffe() {

    const [cnt,setCnt] = useState(0);
    const [data,setData] = useState(100)

    
    useEffect(() =>{
      console.log("hi")
    },[data])
    

  return (
    <div>UseRefe
        <h1>Learn about UseReference</h1>
        <h3>{cnt}</h3>
        <h2>{data}</h2>
        <button onClick={() => setCnt(cnt+1)}>Update</button>
        <button onClick={() => setData(data+1)}>Update</button>
    </div>
  )
}

export default UseEffe