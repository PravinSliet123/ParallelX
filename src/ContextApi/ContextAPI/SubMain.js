import React, { useContext } from 'react'
import {Detail} from './Context'

function SubMain() {

  const {detail,setDetail} = useContext(Detail)

  return (
    <div>SubMain
      {detail}
    </div>
  )
}

export default SubMain