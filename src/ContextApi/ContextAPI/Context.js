import React, { createContext, useContext, useState } from 'react'

export const Detail = createContext()

const Context = ({children}) => {

    const [detail,setDetail] = useState("hello")

  return (
    <Detail.Provider value={{detail,setDetail}}>
        {children}
    </Detail.Provider>
  )
}

export default Context