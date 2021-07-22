import ToDoItem from './ToDoItem'

const ToDoList = ({todoList, handleCompleted, handleRemoved}) => {

    const renderToDo = (todoList) => {
        return todoList.map( todo => {
            return <ToDoItem 
                key={todo.id + todo.task} 
                todo={todo} 
                handleCompleted={handleCompleted}
                handleRemoved={handleRemoved} />
        })
    }

    return (
        <div className='todo-list'>
            {renderToDo(todoList)}
        </div>
    )
}

export default ToDoList