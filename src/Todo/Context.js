import React, { useState } from 'react'
import { createContext } from 'react'

export const TodoStore = createContext()

const Context = ({ children }) => {


  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [detail, setDetail] = useState([])
  return (<TodoStore.Provider
    value={{ detail, setDetail, items, setItems, newItem, setNewItem }}
  >
    {children}
  </TodoStore.Provider>
  )
}

export default Context