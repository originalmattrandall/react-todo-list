import AddTaskForm from './components/AddTaskForm'
import ToDoList from './components/ToDoList'
import { useState } from 'react'

const App = () => {
  const [toDoList, setToDoList] = useState([])

  const addToDo = (newTask) => {
    let listCopy = [...toDoList]
    listCopy = [...listCopy, {id: listCopy.length + 1, task: newTask, complete: false}]
    setToDoList(listCopy)
  }

  const toggleComplete = (id) => {
    const updatedList = toDoList.map(todo => {
      return todo.id === Number(id) ? {...todo, complete: !todo.complete} : {...todo}
    })
    setToDoList(updatedList)
  }

  const removeTask = (id) => {
    const updatedList = toDoList.filter(todo => {
      return todo.id !== Number(id)
    })
    setToDoList(updatedList)
  }

  return (
    <div className="todo-app">
      <AddTaskForm addNewtask={addToDo}/>
      <ToDoList 
      handleCompleted={toggleComplete} 
      handleRemoved={removeTask}
      todoList={toDoList} />
    </div>
  );
}

export default App;
