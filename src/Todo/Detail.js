import React from 'react'
import { useLocation } from 'react-router-dom'

function Detail() {

  const getvalue = useLocation().state.todo;
  console.log(getvalue)
  return (
    <div>Detail
        <p>Hello</p>
        <p>Sneha</p>

    </div>
  )
}

export default Detail