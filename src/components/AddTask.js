import { useState } from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        onAdd({ text, day })

        setText('')
        setDay('')
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <RiCheckboxBlankCircleLine className="task-checkbox" />
            <div className="form-items">
                <input className="form-input-task" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
                <input className="form-input-date" type="text" placeholder="Add Day and Time" value={day} onChange={(e) => setDay(e.target.value)}/>
                <input className="form-input-submit" type="submit" value='Save Task'/>
            </div>
        </form>
    )
}

export default AddTask
