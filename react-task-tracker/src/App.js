import React from "react"
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [tasks , setTasks] = React.useState([
    {
      id: 1,
      text: "test1",
      day: "day1",
      reminder: true,
    },
    {
      id: 2,
      text: "test2",
      day: "day2",
      reminder: true,
    },
    {
      id: 3,
      text: "test3",
      day: "day3",
      reminder: true,
    },
    {
      id: 4,
      text: "test4",
      day: "day4",
      reminder: true,
    }
  ])

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) +1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task)=> task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task)=>task.id === id ? {...task, reminder: !task.reminder} : task ))
  }

  return (
    <div className="container">
      <Header/>
      <AddTask onAdd={addTask}/>
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle = {toggleReminder}/> : "No Tasks To Show"}
    </div>
  );
}

export default App;
