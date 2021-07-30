import React from 'react'
import './ToDoList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus,faTrash } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useSelector,useDispatch } from 'react-redux'
import addItem from '../actions/add_item'
import deleteItem from '../actions/delete_item'
import removeAll from '../actions/remove_all'
import checkItem from '../actions/check_item'
function ToDoList() {
    let [input,setInput]=useState("")
    let taskList=useSelector((state)=>state.list)
    let tasks=taskList.map((value)=>{
        return  <div className="list-item">
        <div className="task">{value.data}</div>
        <div className="list-icons">
        <div className="check-section">
            <div className={!value.completed?"check-icon":"check-icon-complete"} onClick={()=>dispatch(checkItem(value.id))}></div>
        </div>
        <div className="delete-icon"><FontAwesomeIcon onClick={()=>dispatch(deleteItem(value.id))} icon={faTrash} /></div>
        </div>
        </div>
    })
    const dispatch = useDispatch()
    return (
        <>
        <div className="input-area">
            <input type="text" className="input-text" placeholder="Enter Task" value={input} onChange={(event)=>setInput(event.target.value)} />
            <button className="btn" onClick={()=>{
                input!==""?dispatch(addItem(input),setInput("")):setInput("")
            }}><FontAwesomeIcon icon={faPlus} /></button>
        </div>
        <div className="list">
            {tasks}
        </div>
        {taskList.length>0?<button className="remove-all" onClick={()=>dispatch(removeAll())}>Remove All</button>:<></>}
        </>
    )
}

export default ToDoList
