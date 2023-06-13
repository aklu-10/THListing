import React, { useReducer } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList';
import todoReducer from '../../reducer/todoReducer';

const TodoApp = () => {

    const [todoData, dispatch] = useReducer(todoReducer, []);

    return (
    <>
        <AddTodo dispatch={dispatch}/>
        <TodoList todoData={todoData} dispatch={dispatch}/>
    </>
  )
}

export default TodoApp