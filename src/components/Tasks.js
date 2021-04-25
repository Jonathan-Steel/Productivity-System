import Task from './Task'

const Tasks = ({ tasks, onTaskComplete }) => {
    return (
        <>
          {tasks.map((task) => (
            <Task key={task.id} task={task} onTaskComplete={onTaskComplete} />
          ))}
        </>
    )
}

export default Tasks
