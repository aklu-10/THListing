function todoReducer(todoData, action)
{
    let data = [...todoData];

    switch(action.type)
    {
        case 'ADD':
            data.push(action.payload);
            return data;
        
        case 'UPDATE':
            data.splice(action.payload.ind, 1, action.payload.newTodo);
            return data;

        case 'DELETE':
            data.splice(action.payload, 1);
            return data;            

        default: return todoData;
    }
}

export default todoReducer;