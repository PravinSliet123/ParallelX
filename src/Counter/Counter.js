import React from 'react'
import './Counter.css'
import { useState } from 'react'

function Counter() {

    const[cnt,setCnt] = useState(0)

    function add(){
        setCnt(cnt+1)
    }

    function sub(){
        setCnt(cnt-1)
    }
  return (
    <div className='body'>
        <div className='heading'>
            <h1>Counter</h1>
        </div>

        <div className='content'>
            <div className='display'>
                <h1>{cnt}</h1>
            </div>

            <div className='btn'>
                <h3 onClick={add}>+</h3>
                {cnt >= 1 ?<h3 onClick={sub}>-</h3> : " "}
            </div>
        </div>
        
        
        
        
    </div>
  )
}

export default Counter