import React, { useContext, useState } from 'react'
import './Todo.css'
import { Link, useNavigate } from 'react-router-dom';
import { TodoStore } from './Context';


function Todo() {
const {detail,setDetail,items, setItems,newItem, setNewItem} = useContext(TodoStore)
console.log('value: ', detail);
 
    const navigate = useNavigate()

    const handleClick = () => {
        if(newItem.length <= 3){
            alert("You have to write somthing")
        }else{
            const itemId = Date.now().toString();
            const newItemObj = { id: itemId, text: newItem };
            setItems([...items, newItemObj]);
            setNewItem('');
        }

    }

    const deleteItem = (Id) => {
        const show = items.filter((item) => item.id !== Id)
        setItems(show)
    }

    const updateItem = (Id) => {
        const show = items.filter((item) => item.id === Id)
        setNewItem(show.text)
    }


    return (
        <div className='body'>
            <div className='heading'>
                <h1>Todo</h1>
            </div>

            <div className='input-box'>
                <input id="input" type="text" value={newItem} onChange={(e) => setNewItem(e.target.value)} />
                <button id="btn" onClick={handleClick}>ADD</button>
            </div>


            <div className='display'>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            <div className='text'>
                                <span>{item.text}</span>
                            </div>
                            
                            <div className='btn1'>
                                <button id="btn" onClick={() => deleteItem(item.id)}>Delete</button>
                                <button onClick={() => updateItem(item.id)}>Update</button>
                                <li>
                                    <button onClick={() => navigate("/detail",{state:item})}  >About</button>
                                </li>
                            </div>
                            
                        </li>
                    ))}
                </ul>
            </div>



        </div>
    )
}

export default Todo