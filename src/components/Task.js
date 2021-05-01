import { FaCheckCircle } from 'react-icons/fa'
import { RiCheckboxBlankCircleLine } from 'react-icons/ri'
import { RiCheckboxCircleFill } from 'react-icons/ri'
import Tasks from './Tasks'

const Task = ({ task, onTaskComplete, view }) => {
    
    // const getDateFormat = (dayObject) => {
    //     let [date_month, date_day, date_year] = dayObject.toLocaleDateString("en-US").split("/")
    //     let [today_month, today_day, today_year] = new Date().toLocaleDateString("en-US").split("/")
    //     if (date_year - today_year === 0 && date_month - today_month === 0 && today_day - today_day === 0) {
    //         return "Today"
    //     }
    //     else {
    //         return `${dayObject.toDate} ${dayObject.getHours()}:`
    //     }
    // }

    const isToday = (someDate) => {
        if (someDate instanceof Date) {
            const today = new Date()
            return someDate.getDate() == today.getDate() && someDate.getMonth() == today.getMonth() && someDate.getFullYear() == today.getFullYear()
        } else {
            return false
        }
    }

    const isUpcoming = (someDate) => {
        if (someDate instanceof Date) {
            const today = new Date()
            return someDate > today
        } else {
            return false
        }
    }

    // console.log(`View: ${view}\tTask: ${task.text}\t\t\tDay: ${task.day ? task.day.toLocaleDateString("en-GB") : "null"}`)

    if (view === "Inbox" && !task.project && !task.day) {
        return (
            <div className={`task ${task.completed ? 'completed' : ''}`}>
                {task.completed ? <RiCheckboxCircleFill className="task-checkbox" onClick={() => onTaskComplete(task.id)} /> : <RiCheckboxBlankCircleLine className="task-checkbox" onClick={() => onTaskComplete(task.id)} />}
                <div className="task-content">
                    <p className="task-header">{task.text}</p>
                    {task.project && <p className="task-project">{task.project}</p>}
                    {task.day && <p className="task-date">{`${task.day.toLocaleDateString("en-GB")}`}</p>}
                </div>
            </div>
        )
    } else if (view === "Today" && isToday(task.day)) {
        return (
            <div className={`task ${task.completed ? 'completed' : ''}`}>
                {task.completed ? <RiCheckboxCircleFill className="task-checkbox" onClick={() => onTaskComplete(task.id)} /> : <RiCheckboxBlankCircleLine className="task-checkbox" onClick={() => onTaskComplete(task.id)} />}
                <div className="task-content">
                    <p className="task-header">{task.text}</p>
                    {task.project && <p className="task-project">{task.project}</p>}
                    {/* {task.day && <p className="task-date">{`${task.day.toLocaleDateString("en-GB")}`}</p>} */}
                </div>
            </div>
        )
    } else if (view === "Upcoming" && isUpcoming(task.day)) {
        return (
            <div className={`task ${task.completed ? 'completed' : ''}`}>
                {task.completed ? <RiCheckboxCircleFill className="task-checkbox" onClick={() => onTaskComplete(task.id)} /> : <RiCheckboxBlankCircleLine className="task-checkbox" onClick={() => onTaskComplete(task.id)} />}
                <div className="task-content">
                    <p className="task-header">{task.text}</p>
                    {task.project && <p className="task-project">{task.project}</p>}
                    {task.day && <p className="task-date">{`${task.day.toLocaleDateString("en-GB")}`}</p>}
                </div>
            </div>
        )
    }

    // return (
    //     <div className={`task ${task.completed ? 'completed' : ''}`}>
    //         {task.completed ? <RiCheckboxCircleFill className="task-checkbox" onClick={() => onTaskComplete(task.id)} /> : <RiCheckboxBlankCircleLine className="task-checkbox" onClick={() => onTaskComplete(task.id)} />}
    //         <div className="task-content">
    //             <p className="task-header">{task.text}</p>
    //             {task.project && <p className="task-project">{task.project}</p>}
    //             {task.day && <p className="task-date">{`${task.day.toLocaleDateString("en-GB")}`}</p>}
    //         </div>
    //     </div>
    // )
    return (
        <></>
    )
}

export default Task
