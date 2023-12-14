import React, { useMemo, useState } from 'react'

function UseMemon() {

    const [count,setCount] = useState(0)
    const [data,setData] = useState(100)

    const noRender = useMemo(()=>{
        return <div>
            <h1>No render {count}</h1>

            <div>
                <h2>No render {data}</h2>
            </div>
        </div>
    },[data])
  return (
    <div>
        {noRender}
        <p>Render again and again {count}</p>
        <button onClick={() => setCount(count+1)}>Update</button>
        <button onClick={() => setData(data+1)}>Update Data</button>
    </div>
  )
}

export default UseMemon