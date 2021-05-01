import Task from './Task'

const Tasks = ({ tasks, onTaskComplete, view }) => {
    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onTaskComplete={onTaskComplete} view={view} />
          ))}
        </>
    )
}

export default Tasks
