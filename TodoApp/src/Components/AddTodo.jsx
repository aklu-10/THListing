import React from 'react'
import { useState } from 'react';

const AddTodo = ({dispatch}) => {

    const [todo, setTodo] = useState(''); 

    function handleSubmit(e)
    {
        e.preventDefault();
        if(todo)
        {
            dispatch({type:'ADD', payload:todo});
            setTodo('');
        }
    }

    function handleChange(e)
    {
        setTodo(e.target.value);
    }

  return (
    <form onSubmit={handleSubmit}>
        <input onChange={handleChange} value={todo} type='text' placeholder='Enter Todo'/>
        <button type='submit'>Add</button>
    </form>
  )
}

export default AddTodo