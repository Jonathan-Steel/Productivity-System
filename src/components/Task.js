import { FaCheckCircle } from 'react-icons/fa'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { RiCheckboxCircleFill } from 'react-icons/ri'

const Task = ({ task, onTaskComplete }) => {
    return (
        <div className={`task ${task.completed ? 'completed' : ''}`}>
            {task.completed ? <RiCheckboxCircleFill className="task-checkbox" onClick={() => onTaskComplete(task.id)} /> : <RiCheckboxBlankCircleLine className="task-checkbox" onClick={() => onTaskComplete(task.id)} />}
            <div className="task-content">
                <p className="task-header">{task.text}</p>
                <p className="task-date">{task.day}</p>
            </div>
        </div>
    )
}

export default Task
