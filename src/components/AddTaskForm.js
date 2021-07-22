import { useState } from "react"

const AddTaskForm = ({addNewtask}) => {
    const [userInput, setUserInput] = useState('')

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }

    const handleSubmit = (event) => {
        if (!userInput) return;

        // This prevents the form from submitting and refreshing the component
        event.preventDefault()

        addNewtask(userInput)
        setUserInput('')
    }

    return (
        <div className='todo-form'>
            <form onSubmit={handleSubmit}>
                <label>
                    What Needs to Get Done?
                    <input type='text' name='task' value={userInput} onChange={handleChange}/>
                </label>
                <button>Add New Task</button>
            </form>
        </div>
    )
}

export default AddTaskForm