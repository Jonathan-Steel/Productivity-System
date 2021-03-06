import { useState } from 'react'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [notes, setNotes] = useState('')
    const [day, setDay] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!text) {
            alert('Please add a task')
            return
        }

        let today = new Date(2021, 3, 16, 18)
        onAdd({ text, notes, today })

        setText('')
        setNotes('')
    }

    return (
        <form onSubmit={onSubmit} className="add-form">
            <RiCheckboxBlankCircleLine className="task-checkbox" />
            <div className="form-items">
                <input className="form-input-task" type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)}/>
                <input className="form-input-notes" type="text" placeholder="Notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                <input className="form-input-submit" type="submit" value='Save Task'/>
            </div>
        </form>
    )
}

export default AddTask
