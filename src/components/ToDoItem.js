const ToDoItem = ({todo, handleCompleted, handleRemoved}) => {
    return (
        <div id={todo.id} 
            name='todoitem'
            className={todo.complete ? 'todo-item complete' : 'todo-item'}>
                <p>{todo.task}</p>
                <input type='button' value='Complete' onClick={() => {handleCompleted(todo.id)}} />
                <input type='button' value='Remove' onClick={() => {handleRemoved(todo.id)}}/>
        </div>
    )
}

export default ToDoItem