import React, { useContext } from 'react'
import {Detail} from './Context'
import SubMain from './SubMain'

function Main() {

    const {detail,setDetail} = useContext(Detail)
  return (
    <div>Main<SubMain/>
        <button onClick={() => setDetail('updated data')}>Update</button>
    </div>
  )
}

export default Main