import React, { useState } from 'react'

const Todo = ({todo, index, dispatch}) => {

    const [newTodo, setNewTodo] = useState('');
    const [editBox, setEditBox] = useState(false);
    const [ind, setInd] = useState(null);

    function todoUpdate(e, index)
    {
        setInd(index);
        setEditBox(true);
    }

  return (
    <>
        <div key={index}>
                <p>{todo}</p>
                <button onClick={(e)=>todoUpdate(e, index)}>Update 
                </button>
                <button onClick={()=>dispatch({type:'DELETE', payload:index})}>Delete</button>
        </div>
    {
        editBox ? 

        <div>
            <input type='text' onChange={(e)=>setNewTodo(e.target.value)} value={newTodo} placeholder='Set new value'/>
            <button onClick={()=>dispatch({type:'UPDATE', payload:{ind, newTodo}})}>Save</button>
            <button onClick={()=>setEditBox(false)}>Close</button>
        </div>


        : null
    }
    </>
  )
}

export default Todo