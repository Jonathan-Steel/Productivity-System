import { useState } from 'react'

import Header from './components/Header'
import Sidebar from './components/Sidebar'
import Tasks from './components/Tasks'
import Button from './components/Button'
import AddTask from './components/AddTask'

function App() {
  const [view, setView] = useState("Inbox")
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Revise for Food Magnate Programming Exam",
        notes: "",
        day: new Date(2021, 4, 5),
        project: "Computer Science",
        tags: [],
        completed: false,
    },
    {
        id: 2,
        text: "Finish NEA",
        notes: "",
        day: new Date(2021, 4, 19),
        project: "Computer Science",
        tags: [],
        completed: false,
    },
    {
        id: 3,
        text: "Revise for Single Applied Test",
        notes: "",
        day: new Date(2021, 4, 1),
        project: "Further Stats",
        tags: [],
        completed: false,
    },
    {
      id: 4,
      text: "Get Better at JavaScript",
      notes: "",
      day: null,
      project: "",
      tags: [],
      completed: false,
    },
    {
      id: 5,
      text: "Get Gym Membership Sorted",
      notes: "",
      day: new Date(2021, 4, 1),
      project: "Fitness",
      tags: [],
      completed: false,
    },
  ])

  // console.log(tasks)

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

  const switchView = (newView) => {
    setView(newView)
  }

  return (
    <div className="App">
      <div className="col-1">
        <Sidebar onSwitchView={switchView} />
      </div>
      <div className="col-2">
        <div className="header">
          <Header view={view} />
          <Button text="Add" onClick={addButtonOnClick} />
        </div>
        <div className="main-content">
          {tasks.length > 0 ? <Tasks tasks={tasks} onTaskComplete={completeTask} view={view} /> : 'Nothing to see here.'}
          {showAddTask && <AddTask onAdd={addTask} />}
        </div>
      </div>
    </div>
  );
}

export default App;
