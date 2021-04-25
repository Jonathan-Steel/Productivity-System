import { useState } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import Button from './components/Button'
import AddTask from './components/AddTask'

import { FaInbox } from 'react-icons/fa'
import { FaStar } from 'react-icons/fa'
import { FaCalendarAlt } from 'react-icons/fa'
import { FiSunset } from 'react-icons/fi'
import { FaCheckCircle } from 'react-icons/fa'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Call Nanny and Grandad",
        day: "Apr 25th at 18:00",
        project: null,
        completed: false,
    },
    {
        id: 2,
        text: "Setup Pizza Party",
        day: "Apr 24th at 18:30",
        project: null,
        completed: false,
    },
    {
        id: 3,
        text: "Revise for Further Statistics Test",
        day: "Apr 29th at 19:00",
        project: null,
        completed: false,
    },
  ])

  const addButtonOnClick = () => {
    setShowAddTask(!showAddTask)
  }

  // Complete Task
  const completeTask = (id) => {
    // setTasks(tasks.filter((task) => task.id !== id))
    setTasks(tasks.map((task) => task.id === id ? { ...task, completed: !task.completed} : task))
  }

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = { id, ...task }
    setTasks([...tasks, newTask])
  }

  return (
    <div className="App">
      <div className="col-1">
        <Sidebar />
      </div>
      <div className="col-2">
        <div className="header">
          <Header icon={<FaInbox />} title={"Inbox"} />
          <Button text="Add" onClick={addButtonOnClick} />
        </div>
        <div className="main-content">
          {tasks.length > 0 ? <Tasks tasks={tasks} onTaskComplete={completeTask} /> : 'Nothing to see here.'}
          {showAddTask && <AddTask onAdd={addTask} />}
        </div>
      </div>
    </div>
  );
}

export default App;
