import React, { useState } from 'react'
import Todo from './Todo';

const TodoList = ({todoData, dispatch}) => {

  return (

    <>
        { todoData &&
          todoData.map((todo, index)=>(
            <Todo dispatch={dispatch} key={index} todo={todo} index={index}/>
          ))
        }
    </>
  )
}

export default TodoList;